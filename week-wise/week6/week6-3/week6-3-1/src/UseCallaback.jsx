import {useEffect, useState, memo, useCallback} from "react";

function UseCallback(){
    const [exchange1Data, setExchange1Data] = useState({});
    const [exchange2Data, setExchange2Data] = useState({});
    const [bankData, setBankData] = useState({});

    useEffect(()=>{
        setExchange1Data({
            returns: 100
        });
    }, []);

    useEffect(()=>{
        setExchange2Data({
            returns: 100
        });
    }, []);

    useEffect(() => {
        setTimeout(()=>{
            setBankData({
                income: 100
            });
        }, 3000)
    }, []);

    // useCallback is not about the minimizing the amount of code that is run
    // useCallback is about not rendering a child components, if the function hasn't/doesn't need to change across renders

    const calculateCryptoReturns =useCallback( ()=>{
        return exchange1Data.returns + exchange2Data.returns;
    }, [exchange1Data, exchange2Data]);

    return <div>
        <Child calculateCryptoReturns={calculateCryptoReturns}/>
    </div>
}

const Child= memo(({calculateCryptoReturns})=>{
    return <div>
        hii there, here is your tax returns {calculateCryptoReturns()}
    </div>
})

export default UseCallback;
