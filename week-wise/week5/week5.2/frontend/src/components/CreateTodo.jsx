import { useState } from "react";

export function CreateTodo(){
    const [title,  setTitle] = useState("");
    const [description,  setDescription] = useState("");

    return <div style={{
        padding: 20,
        margin: 10,
        display: "flex"
    }}>
        <label > Title: </label> <input type="text" placeholder="title" id="title" onChange={function(e){
            const value=e.target.value;
            setTitle(value);
    }}/>
        <label style={{ paddingLeft:20 }}> Description: </label> <input  type="text" placeholder="description" id="description" onChange={(e)=>{
            const value=e.target.value;
            setDescription(value);
    }}/>

        <div style={{ paddingLeft:20 }}>
            <button onClick={async ()=>{
                const res = await fetch("http://localhost:4000/todo",{
                    method: "post",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers:{
                        "Content-type": "application/json"
                    }
                });
                const response = await res.json();
                alert(response.msg);
            }}>Add a todo</button>
        </div>
    </div>
}