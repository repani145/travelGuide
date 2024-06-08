import Combiner from "../combiner/combiner";
import Footer from "../footer/footer";
import MyNavbar from "../navBar/navv";


const Hotels = ()=>{
    return(
        <>  <MyNavbar/>
            <Combiner cat={'hotels'}/>
            <Footer/>
        </>
    )
}

export default Hotels;