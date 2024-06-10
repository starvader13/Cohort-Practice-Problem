import {atomFamily} from "recoil";
import {TODOS} from "./todo.js";

// cached the value
export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id => {
        return TODOS.find(x => x.id===id)
    }
});
