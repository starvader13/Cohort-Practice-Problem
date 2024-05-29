import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {todoState} from "../store/todo.js"

export default function Input(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const setTodo = useSetRecoilState(todoState);

    function addTodo(){

        setTodo(todo=>[...todo, {
            title: title,
            description: description
        }])
    }

    return <div>
        <input type={"text"} placeholder={"Title"} onChange={e=>setTitle(e.target.value)}/>
        <input type={"text"} placeholder={"Description"} onChange={e=>setDescription(e.target.value)}/>
        <button onClick={addTodo}>Add todo</button>
    </div>
}
