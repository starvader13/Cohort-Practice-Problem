import {useEffect, useState} from "react";

const useIsOnline = ()=>{
    const [status, setStatus] = useState(window.navigator.onLine);

    useEffect(() => {
        // const interval  = setInterval(()=>{
        //     window.navigator.onLine ? setStatus(true) : setStatus(false);
        // }, 1000)

        window.addEventListener("online", ()=>setStatus(true));
        window.addEventListener("offline", ()=>setStatus(false));

        return ()=>{
            // clearInterval(interval);
            window.removeEventListener("online", ()=>setStatus(true))
            window.removeEventListener("offline", ()=>setStatus(false))
        }
    }, []);

    return status;
}

const HookUseIsOnline = ()=>{
    const status = useIsOnline();
    console.log(status)
    return <div>
        {
            status ? <div>You are online</div> : <div>You are offline</div>
        }
    </div>
}

export default HookUseIsOnline
