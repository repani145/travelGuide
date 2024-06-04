import { Link } from "react-router-dom";


const Nav1=()=>{
    return(
        <>
        <Link to={'/'} >Home</Link>
        <Link to={'/contactUs'} style={{marginLeft:20}}>contact Us</Link>
        {/* <Link to={'*'} style={{marginLeft:20}}></Link> */}

        </>
    )
}

export default Nav1;