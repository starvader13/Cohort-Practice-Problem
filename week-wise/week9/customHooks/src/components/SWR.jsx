// Data fetching Hooks
import {useEffect, useState} from "react";
import axios from "axios";

function useTodos(n){
    const [todos, setTodos] =  useState([]);

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const interval = setInterval(()=>{
            axios.get("https://sum-server.100xdevs.com/todos").
            then(res=>{
                setTodos(res.data.todos);
            })
        }, n*1000);

        axios.get("https://sum-server.100xdevs.com/todos").
        then(res=>{
            setTodos(res.data.todos);
            setLoading(false);
        })

        return ()=>{
            setTodos([]);
            clearInterval(interval);
        }
    }, [n])

    return {todos, loading}
}

function SWR() {
    const {todos, loading} =  useTodos(2);
    return <div>
        {
            loading ? <div>LOADING</div> : todos.map(todo=>{
                return <Track key={todo.id} todo={todo} />
            })
        }
    </div>
}

function Track({todo}){
    return <div>
        {todo.title}
        <br/>
        {todo.description}
    </div>
}

export default SWR
