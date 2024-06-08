import Combiner from "../combiner/combiner";
import Footer from "../footer/footer";
import MyNavbar from "../navBar/navv";

const Places = ()=>{
    return(
        <>  <MyNavbar/>
            <Combiner cat={'attractions'}/>
            <Footer/>
        </>
    )
}

export default Places;