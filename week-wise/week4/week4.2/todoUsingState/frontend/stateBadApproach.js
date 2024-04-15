function saveTodo(title, description, id){
    const outerDiv = document.createElement("div");
    const innerDivTitle = document.createElement("div");
    const innerDivDescription = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("onClick", `changeState(${id})`)

    innerDivTitle.innerHTML = `<b>TODO Title</b>: ${title}`;
    innerDivDescription.innerHTML = `<b>TODO Description</b>: ${description}`;
    button.innerHTML = "Mark as done";

    outerDiv.appendChild(innerDivTitle);
    outerDiv.appendChild(innerDivDescription);
    outerDiv.appendChild(button);
    outerDiv.setAttribute("id", id);

    return outerDiv;
}

function changeState(todoId){
    const parent = document.getElementById(`${todoId}`);
    parent.children[2].innerHTML="Done";
}

// State will be an array
// every element of state would have a title, description and id
function updateDomAccToState(state){
    const parent = document.getElementById("todoList");
    parent.innerHTML="";
    for(let i=0;i<state.length;i++){
        const outerDiv = saveTodo(state[i].title, state[i].description, state[i].id);
        console.log(outerDiv);
        console.log("hello");
        parent.appendChild(outerDiv);
    }
}

async function requestServerForJSON(){
    const serverURL = "https://sum-server.100xdevs.com/todos";
    const response = await fetch(serverURL, {method: "get"});
    const json = await response.json();
    updateDomAccToState(json.todos);
}

window.setInterval(requestServerForJSON, 5000);
