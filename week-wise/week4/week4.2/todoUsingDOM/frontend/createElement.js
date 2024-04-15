let globalId=0;

function saveTodo(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const outerDiv = document.createElement("div");
    const innerDivTitle = document.createElement("div");
    const innerDivDescription = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("onClick", `changeState(${++globalId})`)

    innerDivTitle.innerHTML = `<b>TODO Title</b>: ${title}`;
    innerDivDescription.innerHTML = `<b>TODO Description</b>: ${description}`;
    button.innerHTML = "Mark as done";

    outerDiv.appendChild(innerDivTitle);
    outerDiv.appendChild(innerDivDescription);
    outerDiv.appendChild(button);
    outerDiv.setAttribute("id", globalId);

    const parent = document.getElementById("todoList");
    parent.appendChild(outerDiv);
}

function changeState(todoId){
    const parent = document.getElementById(`${todoId}`);
    parent.children[2].innerHTML="Done";
}