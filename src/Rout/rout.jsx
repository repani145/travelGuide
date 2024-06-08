import { BrowserRouter, Route, Routes } from "react-router-dom"
import Lander from "../LandingPage/landing_page"
import Places from "../Places/places"
import Hotels from "../hotels/hotels"
import Card11 from "../Card/card1"
import Restaurent from "../Restaurents/restaurent"


const MainRout = ()=>{

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Lander}/>
                    <Route path="/places" Component={Places}/>
                    <Route path="/hotels" Component={Hotels}/>
                    <Route path="/restaurents" Component={Restaurent} />
                    {/* <Route path='/sample' Component={Card11}/> */}
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default MainRout;