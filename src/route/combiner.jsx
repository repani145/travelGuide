import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home1 from "./home";
import Contact from "./contactUs";
import Invalid from "./invalid";
import Cart1 from "./cart";
import { useState } from "react";



const Combiner1=()=>{
    
    
    return(
        <>
        
            <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" Component={Home1}/>
                </Route>
            </Routes>
                {
                    false ?
                    <Routes>
                        <Route path="/contactUs" Component={Contact}/>
                        <Route path="*" Component={Invalid}/>
                        <Route path="/home/cart/:num" Component={Cart1}/>
                    </Routes>
                    :
                    null
                }
            </BrowserRouter>
        </>
    )
}

export default Combiner1;