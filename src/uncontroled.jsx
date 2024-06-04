import { useRef, useState } from "react";

const Uncon=()=>{
    const [name,setName]=useState(true)
    const uname=useRef()

    const fun=()=>{
        // console.log(uname.current.value)
        if(uname.current.value.length >= 5 && uname.current.value.length <= 8){
            console.log('ok')
            setName(true)
        }else{
            console.log('not ok')
            setName(false)
        }
    }
    // console.log(uname.current.value)
    return(
        <>
            <input type="text" ref={uname} />
            {
                name?
                    undefined
                :
                <span>name length should be 5-8 chars</span>
            }
             <br/>
            <button onClick={fun}>submit</button>
        </>
    )


}
export default Uncon;