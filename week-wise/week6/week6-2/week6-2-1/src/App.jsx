import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [id, setId] = useState("1")
  return <>
    <div>
      <button onClick={()=>{setId('1')}}>1</button>
      <button onClick={()=>{setId('2')}}>2</button>
      <button onClick={()=>{setId('3')}}>3</button>
      <button onClick={()=>{setId('4')}}>4</button>
    </div>
    <Todo id={id}/>
  </>
}

function Todo({ id }){
    const [todo, setTodo] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:3000/todos?id=${id}`).then((response)=>{
            setTodo(response.data.todo);
        })
    }, [id])

    return <div>
        <div>{todo.title}</div>
        <div>{todo.description}</div>
    </div>
}

export default App
