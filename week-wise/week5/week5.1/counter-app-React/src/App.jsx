import { useState } from "react";

function App() {
    const [count, setCount] =useState(0);


    return (
        <div>
          <CustomButton count={count} setCount={setCount}></CustomButton>
          <CustomButton count={count*10} setCount={setCount}></CustomButton>
        </div>
    )
}

function CustomButton(props){

    function onClickHandler(){
        // eslint-disable-next-line react/prop-types
        props.setCount(props.count+1);
    }

    return <button onClick={onClickHandler}>
        {/* eslint-disable-next-line react/prop-types */}
        Counter {props.count}
    </button>
}

export default App
