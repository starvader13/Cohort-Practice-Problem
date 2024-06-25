import {useEffect, useState} from "react";

const useMousePointer = ()=>{
    const [position, setPosition] = useState({x: 0, y:0});

    const handleMouseClick = (e)=>{
        setPosition({x: e.clientX, y: e.clientY});
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseClick)

        return ()=>{
            window.removeEventListener("mousemove", handleMouseClick)
        }
    }, []);

    return position;
}

const HookUseMousePointer = ()=>{
    const position = useMousePointer();
    return <div>
        Your Mouse is at {position.x} {position.y};
    </div>
}

export default HookUseMousePointer;
