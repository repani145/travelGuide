import { Link } from "react-router-dom";
import Nav1 from "./Nav";
import { useState } from "react";


const Home1=()=>{
    const [count,setCount]=useState(0)
    
    return(
        <>
            <Nav1/>
            {/* <button onClick={()=>{setCdn(!cdn)}}>Login</button> */}
            <h1>Home Page</h1>
            <h2>{`count : ${count}`}</h2>
            <button onClick={()=>{setCount(count+1)}}>add to cart</button>
            <Link to={`/home/cart/${count}`}>Cart</Link>
        </>
    )
}
export default Home1;
