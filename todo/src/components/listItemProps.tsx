import { todoState } from "@/state/todoState";
import Todo from "@/types/inputForm";
import { useRecoilState } from "recoil";
import ListItem from "./listItem";

const ListItemProps = () => {
    const [todos] = useRecoilState<Todo[]>(todoState);
    return (
        <>
            {
                todos.map((todo) => (
                    <ListItem key={todo.id} todo={todo} />
                ))
            }
        </>
    )
}

export default ListItemProps;