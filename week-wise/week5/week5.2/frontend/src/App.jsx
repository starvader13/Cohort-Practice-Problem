import { CreateTodo } from "./components/CreateTodo.jsx";
import { Todos } from "./components/Todo.jsx";
import { useState } from "react";


function App() {
    // const todos =  [
    //     {"_id":"661bddae7f8e73beff9c3739","title":"title","description":"description","completed":true,"__v":0},
    //     {"_id":"661cb119aa637aa4eec2855d","title":"title1","description":"description1","completed":false,"__v":0},
    //     {"_id":"661cb122aa637aa4eec2855f","title":"title2","description":"description2","completed":false,"__v":0},
    //     {"_id":"661cb732aa637aa4eec2e64d","title":"Ashutosh ","description":"Gupta","completed":false,"__v":0},
    //     {"_id":"661cb73aaa637aa4eec2e64f","title":"Ashutosh ","description":"Gupta","completed":false,"__v":0}
    // ]
    const [todos, setTodos] = useState([]);

    fetch("http://localhost:4000/todo",{
        method: "get"
    }).then(async (res)=>{
        const response = await res.json();
        console.log(response.todos)
        setTodos(response.todos);
    })

  return (
    <div>
        <CreateTodo/>
        <Todos todos={todos}/>
    </div>
  )
}

export default App
