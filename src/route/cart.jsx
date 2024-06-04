import { useParams } from "react-router-dom";
import Nav1 from "./Nav";

const Cart1=()=>{
    const {num}=useParams()
    return(
        <>
        <Nav1/>
            <h1>{num}</h1>
        </>
    )
}

export default Cart1;
