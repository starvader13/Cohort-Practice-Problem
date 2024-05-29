import {useRecoilValue, useSetRecoilState} from "recoil";
import {filterState, todoState} from "../store/todo.js";
import {useEffect} from "react";

export default function Filter(){
    const todo = useRecoilValue(todoState);
    const filter = useRecoilValue(filterState);
    const setFilter = useSetRecoilState(filterState);

    function filterTodo(filterInput){
        const filteredTodo = todo.filter(todoItem => {
            if(todoItem.title.includes(filterInput) || todoItem.description.includes(filterInput)){
                return todoItem;
            }
        })
        setFilter(filteredTodo);
    }

    useEffect(() => {
        filterTodo("");
    }, [todo]);

    return <div>
        <input type="text" placeholder={"Filter"} onChange={e => {
            filterTodo(e.target.value)
        }}/>
        <div>
            {filter.map((todoItem, index)=>{
                return <div key={index}>
                    <div>{todoItem.title}</div>
                    <div>{todoItem.description}</div>
                </div>
            })}
        </div>
    </div>
}
