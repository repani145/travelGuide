import { useDispatch, useSelector } from "react-redux"
import { user1 } from "./reduX/actions"
import { useEffect } from "react"


const Reg = ()=>{

    const userDATA = useSelector(state=>state.new_user)
    useEffect(()=>{
        window.localStorage.setItem('USERS',userDATA)
    },[userDATA])
    const userDispatch = useDispatch()
    const fromHandler = (e)=>{
        e.preventDefault()
        console.log(e.target[0].value)
        const one={
            username:e.target[0].value,
            password:e.target[1].value
        }
        userDispatch(user1(JSON.stringify(one)))
    }
    return(
        <>
            <form onSubmit={fromHandler}>
                <input type="text" placeholder="create userName"/>
                <input type="password" placeholder="create Password"/>
                <button type="submit">Register</button>
            </form>
        </>
    )
}
export default Reg;