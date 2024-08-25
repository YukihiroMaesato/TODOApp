import { memo, useEffect, useRef, useState } from 'react';
import styles from '../styles/InputForm.module.css';
import Todo from '../types/inputForm';
import { todoState, todoCount } from '../state/todoState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Input, InputProps } from "@/components/input";
import { TextArea, TextAreaProps } from "@/components/textarea";

const InputMemo = memo(function InputMemoComponent(props: InputProps) {
    return <Input {...props} />;
});

const TextAreaMemo = memo(function TextAreaMemoComponent(props: TextAreaProps) {
    return <TextArea {...props} />;
});

const InputForm = function InputFormFunction() {
    const setTodos = useSetRecoilState<Todo[]>(todoState);
    const [count, setCount] = useRecoilState(todoCount);

    const inputTitle = useRef<HTMLInputElement>(null);
    const textAreaContext = useRef<HTMLTextAreaElement>(null);
    const [alert, setAlert] = useState('');

    // 初回だけタイトルにフォーカスを当てる
    useEffect(() => {
        inputTitle.current?.focus();
    }, []);

    const addTodo = () => {
        if (inputTitle.current?.value.trim() && textAreaContext.current?.value.trim()) {
            const id = count;
            const status = '未完了';
            const title = String(inputTitle.current?.value);
            const context = String(textAreaContext.current?.value);
            const newTodo: Todo = { title, context, id, status };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setCount((prevCount) => prevCount + 1);

            // 初期化
            inputTitle.current.value = '';
            textAreaContext.current.value = '';
            setAlert('');

        } else if (inputTitle.current?.value.trim() == "" || textAreaContext.current?.value.trim() == "") {
            // バリデーションチェックに引っかかった場合
            const titleAlert = "タイトルは必須入力項目です";
            const contextAlert = "内容は必須入力項目です";
            const alert = inputTitle.current?.value.trim() == "" ? titleAlert : contextAlert;

            if (alert == titleAlert) {
                inputTitle.current?.focus();
            } else {
                textAreaContext.current?.focus();
            }
            setAlert(alert);
        }
    };

    return (
        <div className="flex flex-col items-center justify-between p-4">
            <div className="w-full max-w-[400px] text-left text-[3rem] font-bold">
                M y &nbsp;&nbsp;T a s k s
            </div>
            <InputMemo
                className="w-full max-w-[400px] p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg mb-4"
                inputRef={inputTitle}
                placeholder="タイトル"
            />
            <TextAreaMemo
                className={`${styles.textarea} w-full h-[150px] max-w-[400px] p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg mb-4`}
                inputRef={textAreaContext}
                placeholder="内容"
            />
            <div className="text-red-600 font-bold mb-4">
                {alert}
            </div>
            <button
                onClick={addTodo}
                className="w-full bg-green-500 hover:bg-green-400 text-white rounded px-4 py-2 text-center text-lg">
                ADD
            </button>
        </div>
    );
};

export default InputForm;