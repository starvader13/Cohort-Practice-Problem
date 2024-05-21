import {useEffect, useRef} from "react";

function UseRef(){
    const divRef = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            // React still thinks there is 2000
            // document.getElementById("incomeTaxContainer").innerHTML = "10";

            // Better way
            console.log(divRef);
            divRef.current.innerHTML = 10
        }, 5000)
    },[])

    const incomeTax="20000"

    return <div>
        hi there, your income tax returns are <div id={"incomeTaxContainer"} ref={divRef}>{incomeTax}</div>
    </div>
}

export default UseRef;