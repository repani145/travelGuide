import { useEffect, useState } from "react";

const Contr=()=>{
    
    

    const [uname,setUname]=useState('')
    const [cdn,setCdn]=useState(true)
    document.title=uname
    const fun=(e)=>{
        
        setUname(e.target.value)
        if(uname.length >= 5 && uname.length <= 8){
            setCdn(true)
        }else{
            setCdn(false)
        }
    }

    console.log(uname)
    return(
        <>
            <input 
            type="text"
            onChange={fun}
            value={uname}
            />
            <span>{cdn ? null : 'length b/w 5-8'}</span>
        </>
    )
}
export default Contr;