import {useMemo, useCallback, useState, memo} from "react";

function UseCallback(){
    const [count, setCount] = useState(1);

    const onClick = useCallback(()=>{
        console.log("child clicked");
    }, [])

    return <>
        <Child onClick={onClick} />
        <button onClick={()=>{
            setCount(count+1)
        }}>Counter ({count})</button>
    </>
}

const Child = memo(({onClick})=>{
    console.log("hii there")
    return <div>
        <button onClick={onClick}>Button Click</button>
    </div>
}, [])

export default  UseCallback