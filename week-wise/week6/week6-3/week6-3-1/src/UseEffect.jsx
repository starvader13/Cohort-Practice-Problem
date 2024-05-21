import {useEffect, useState} from "react";

function UseEffect() {
    const [exchangeData, setExchangeData] = useState({});
    const [bankData, setBankData] = useState({});

    useEffect(()=>{
        setTimeout(() => {
            setBankData({
                income: 100
            });
        }, 3000);
    },[])

    useEffect(()=>{
        setTimeout(() => {
            setExchangeData({
                returns: 100
            });
        }, 1000);
    },[])

    const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

    return <div>
        <div>
            hii there, here is your tax returns {incomeTax}
        </div>
    </div>
}

export default UseEffect;
