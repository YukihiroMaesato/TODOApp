export type Todo = {
    title : string;
    context: string;
    id: number;
    status: '未完了'| '完了';
}

export default Todo;