import React, { memo, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../state/todoState';
import Todo from '@/types/inputForm';

type ListItemPropsTodo = {
    todo: Todo;
};

export const ListItem: React.FC<ListItemPropsTodo> = memo(function ListItemComponent({ todo }) {
    const [todos, setTodos] = useRecoilState<Todo[]>(todoState);

    // ステータス変更
    const changeStatus = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, status: todo.status === '未完了' ? '完了' : '未完了' } : todo
            )
        );
    };
    // 要素を削除する
    const deleteItem = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    return (
        <>
            <div key={todo.id} className="border border-gray-300 bg-white w-full   mt-4">
                <div className="flex flex-row">
                    <div className="p-1 w-16">{todo.status}</div>
                    <div className="p-1 w-22">タイトル:</div>
                    <div className="p-1 w-46">{todo.title}</div>
                </div>
                <div className="flex flex-row">
                    <div className="p-1 w-23">Description:</div>
                    <div className="p-1 w-55">{todo.context}</div>
                </div>
                <div className="flex flex-row justify-end ">
                    <div className="m-8"></div>
                    <button
                        onClick={() => changeStatus(todo.id)}
                        className="w-full w-[45px] h-[35px] bg-green-500 hover:bg-green-400 text-white rounded m-2 text-center text-sm">
                        更新
                    </button>
                    <button
                        onClick={() => deleteItem(todo.id)}
                        className="w-full w-[45px] h-[35px] bg-gray-500 hover:bg-gray-400 text-white rounded m-2 text-center text-sm">
                        削除
                    </button>
                </div>
            </div>
        </>
    )
})

export default ListItem;