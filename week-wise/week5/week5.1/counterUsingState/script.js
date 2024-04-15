const useState = {
    count: 0
}

function increaseCounter(){
    useState.count++;
    reRenderButtonComponent();
}

function reRenderButtonComponent(){
    const counter = document.getElementById("counter");
    counter.innerHTML="";
    const component = buttonComponent(useState.count);
    counter.appendChild(component);
}

function buttonComponent(count){
    const button = document.createElement("button");
    button.innerHTML = `Counter ${count}`;
    button.setAttribute("onClick", "increaseCounter()");
    return button;
}

reRenderButtonComponent()