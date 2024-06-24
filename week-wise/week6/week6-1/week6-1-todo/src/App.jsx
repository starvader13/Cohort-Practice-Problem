import { useState } from 'react'
import './App.css'
// import {Todo} from "./sections/Todo.jsx";

// let counter = 4;

// function App() {
//   const [todos, setTodos] = useState([
//       {id:1, title: "title1", description: "description1"},
//       {id:2, title: "title2", description: "description2"},
//       {id:3, title: "title3", description: "description3"}
//   ]);
//
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//
//   function updateTodo(){
//       setTodos([...todos,{
//           id: counter++,
//           title: title,
//           description: description
//       }])
//   }
//
//   return (
//     <>
//         <input type={"text"} onChange={(e)=>{setTitle(e.target.value)}}/>
//         <input type={"text"} onChange={(e)=>{setDescription(e.target.value)}}/>
//         <button onClick={updateTodo}>Add Todo</button>
//         {todos.map((todo)=>{
//             return <Todo key={todo.id} title={todo.title} description={todo.description}/>
//         })}
//     </>
//   )
// }
function App(){
    // return <>
    //     <CardWrapper innerComponent={<TextComponent />}></CardWrapper>
    // </>
    return <div>
        <CardWrapper>
            <TextComponent/>
        </CardWrapper>
    </div>
}

function TextComponent(){
    return <div>
        hii there
    </div>
}

function CardWrapper({children}){
    return <div style={{border: "2px solid black"}}>
        {children}
    </div>
}

export default App
