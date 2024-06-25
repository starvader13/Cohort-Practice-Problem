import {useEffect, useRef, useState} from "react";

const useDebounce = (inputValue, time)=>{
    const [actualValue, setActualValue] = useState("");

    const timeout = useRef(null);

    useEffect(()=>{
        timeout.current = setTimeout(()=>{
            setActualValue(inputValue);
        }, time);

        return ()=>{
            clearTimeout(timeout.current);
        }
    }, [inputValue, time])

    return actualValue;
}

const HookUseDebounce = ()=>{
    const [inputValue, setInputValue] = useState("");

    const debouncedValue = useDebounce(inputValue, 500);
    console.log(debouncedValue);

    return <div>
        <input type={"text"} placeholder={"Search..."} value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
    </div>
}

export default HookUseDebounce;
