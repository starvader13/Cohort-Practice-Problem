import {useEffect, useMemo, useState} from "react";

function UseMemo(){
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

    const cryptoReturns = useMemo(()=>{
        return exchange1Data.returns + exchange2Data.returns;
    },[exchange1Data, exchange2Data]);

    const incomeTax = (cryptoReturns +bankData. income) * 0.3;

    return <div>
        <div>
            hii there, here is your tax returns {incomeTax}
        </div>
    </div>
}

export default UseMemo