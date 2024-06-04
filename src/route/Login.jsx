import { useContext } from "react";
import { data1 } from "./combiner";

const Login1=()=>{
    const {fun1} = useContext(data1)
    return(
        <>
         <button onClick={fun1}>Login</button>
        </>
    )
}

export default Login1;