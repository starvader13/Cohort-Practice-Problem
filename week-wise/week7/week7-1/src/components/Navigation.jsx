import {useNavigate} from "react-router-dom";

export function Navigation(){
    const navigate = useNavigate();

    return <div>
        <button onClick={()=>{navigate("/")}}>Landing</button>
        <button onClick={()=>{navigate("/dashboard")}}>Dashboard</button>
    </div>
}
