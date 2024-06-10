import {atom, selector} from "recoil";

export const todoState = atom({
    key: "todoState",
    default: []
})

export const filterInput = atom({
    key: "filterInput",
    default: ""
})

export const filterTodoState = selector({
    key: "filterTodoState",
    get: ({get})=>{
        const todo = get(todoState);
        const filter = get(filterInput);

        return todo.filter(item => {
            return (item.title.includes(filter) || item.description.includes(filter));
        });
    }
})
