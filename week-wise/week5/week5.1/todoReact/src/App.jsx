import { useState } from "react";
function App() {
    const [todos, setTodos] = useState([{
        title: "title 1",
        description: "description 1",
        completed: false
    }, {
        title: "title 2",
        description: "description 2",
        completed: true
    }])

    function addTodo(){
        setTodos([...todos,{
            title: "new title",
            description: "new description"
        }]);
    }

    return (
        <div>
          <button onClick={addTodo}>Add to do </button>
          <div>
              { todos.map((todo) => {
                  return <Todo title={todo.title} description={todo.description}/>
              }) }
          </div>
        </div>
    )
}

function Todo(props){
    return <div>
        <div>Title: {props.title}</div>
        <div>Description: {props.description}</div>
    </div>
}


export default App
