// atom family helps in creating dynamic atom
import {useRecoilState} from "recoil";
import {todosAtomFamily} from "./atoms.js";

const AtomFamily = ({id}) => {

    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

    return <div>
        {todo.title}
        {todo.description}
    </div>
}

export default AtomFamily;
