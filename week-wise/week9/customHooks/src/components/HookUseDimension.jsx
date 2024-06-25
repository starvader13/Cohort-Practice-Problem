import {useEffect, useState} from "react";

const useDimension = ()=>{
    const [dimension, setDimension] = useState({height: window.innerHeight, width:window.innerWidth});

    const handleDimension = (e) =>{
        setDimension({
            height: window.innerHeight,
            width: window.innerWidth,
        })
    }

    useEffect(() => {
        window.addEventListener("resize", handleDimension)

        return ()=>{
            window.removeEventListener("resize", handleDimension);
        }
    }, []);

    return dimension;
}

const HookUseDimension = ()=>{
    const dimension = useDimension();
    return <div>
        height: {dimension.height} width: {dimension.width}
    </div>
}

export default HookUseDimension;
