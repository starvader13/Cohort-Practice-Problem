// selector family helps in creating dynamic atom based on async queries
import {useRecoilState, useRecoilStateLoadable, useRecoilValueLoadable} from "recoil";
import {todosAtomFamily} from "./atoms.js";

const AtomFamily = ({id}) => {

    const [todo] = useRecoilValueLoadable(todosAtomFamily(id));

    if(todo.state === "loading"){
        return <div>
            loading...
        </div>
    } else if(todo.state==="hasValue"){
        return <div>
            {todo.contents.title}
            {todo.contents.description}
        </div>
    } else if(todo.state==="hasError"){
        return <div>
            Error while getting data from backend
        </div>
    }

}

export default AtomFamily;
