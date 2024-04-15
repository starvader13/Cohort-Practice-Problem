export function Todos({todos}){
    return <div style={{
        padding: 20,
        margin: 10
    }}>
        {todos.map((todo)=>{
            return <div key={todo._id} style={{
                paddingTop: 10,
                paddingBottom: 10,
            }}>
                <div>Title: {todo.title}</div>
                <div>Description: {todo.description}</div>
                <button onClick={()=>{
                    fetch("http://localhost:4000/completed",{
                        method: "PUT",
                        body: JSON.stringify({
                            id: todo._id
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then(async (res)=>{
                        const response = await res.json();
                        alert(response.msg)
                    })
                }}>{todo.completed===true? "Completed":"Mark as Complete"}</button>
            </div>
        })}

    </div>
}