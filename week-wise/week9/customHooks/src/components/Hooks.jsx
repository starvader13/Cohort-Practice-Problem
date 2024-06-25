import React, {useEffect, useState} from "react";

function Hooks() {
    const [render, setRender] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setRender(!render);
        }, 10000)
    }, [render])
    return <div>
        {
            render ? <MyClassComponent /> : null
        }
        {
            render ? <MyComponent /> : null
        }
    </div>
}

function MyComponent(){
    useEffect(()=>{
        console.error("component mounted");

        return ()=>{
            console.log("component unmounted")
        }
    }, [])

    return <div>
        From component
    </div>
}

class MyClassComponent extends React.Component {
    componentDidMount() {
        console.log("component mounted");
    }

    componentWillUnmount() {
        console.log("unmounted")
    }

    render() {
        return <div>
            From component
        </div>
    }
}

export default Hooks
