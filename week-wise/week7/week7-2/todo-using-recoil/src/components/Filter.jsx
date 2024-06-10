import {useRecoilValue, useSetRecoilState} from "recoil";
import {filterInput, filterTodoState} from "../store/todo.js";

export default function Filter(){
    const setFilterInp = useSetRecoilState(filterInput);
    const filter = useRecoilValue(filterTodoState);

    return <div>
        <input type="text" placeholder={"Filter"} onChange={e => {
            setFilterInp(e.target.value)
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
