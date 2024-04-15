function saveTodo(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    //ugly approach
    const originalHtml = document.getElementById("todoList").innerHTML;
    document.getElementById("todoList").innerHTML = originalHtml + `<div style="margin-bottom: 10px">
                <div>Todo Title: ${title}</div>
                <div>Todo Description: ${description}</div>
                <button>Mark as done</button>
            </div>`
}