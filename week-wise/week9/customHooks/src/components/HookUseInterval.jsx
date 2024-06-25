import {useEffect, useState} from "react";

const useInterval = (callback, time)=>{

    useEffect(() => {
        const interval = setInterval(callback, time*1000)

        return ()=>{
            clearInterval(interval)
        }
    }, [callback, time]);
}

const HookUseInterval = ()=>{
    const [count, setCount] = useState(0);

    function countUpdate(){
        setCount(c=>c+1);
    }

    useInterval(countUpdate, 1);

    return <div>
        Timer is at {count}
    </div>
}

export default HookUseInterval;
