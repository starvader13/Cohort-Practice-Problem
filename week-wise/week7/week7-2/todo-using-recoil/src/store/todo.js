import {atom} from "recoil";

export const todoState = atom({
    key: "todoState",
    default: []
})

export const filterState = atom({
    key: "filterState",
    default: []
})
