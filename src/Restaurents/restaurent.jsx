import Combiner from "../combiner/combiner";
import Footer from "../footer/footer";
import MyNavbar from "../navBar/navv";



const Restaurent = ()=>{
    return(
        <>
            <MyNavbar/>
            <Combiner cat={'restaurants'}/>
            <Footer/>
        </>
    )
}

export default Restaurent;