import {useEffect, useState} from 'react';

function App() {
    const [todos, setTodos] = useState([]);

    async function fetchTodos(){
        const response = await fetch("http://localhost:3000/todo");
        const json = await response.json();
        console.log(json)
        setTodos(json.todos);
    }

    useEffect(() => {
        setTimeout(fetchTodos,10000);
    }, [todos]);

    return (
        <>
            {todos.map((todo)=>{
                return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
            })}
        </>
    )
}

// eslint-disable-next-line react/prop-types
const Todo = ( {title, description} )=>{
    return <div style={{padding: 10, border: "2px solid grey"}}>
        <b>Title: </b>{title}
        <b>Description: </b>{description}
    </div>
}

export default App
