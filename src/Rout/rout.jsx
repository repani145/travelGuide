import { BrowserRouter, Route, Routes } from "react-router-dom"
import Lander from "../LandingPage/landing_page"
import Combiner from "../combiner/combiner"
import Places from "../Places/places"
import Hotels from "../hotels/hotels"


const MainRout = ()=>{

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Lander}/>
                    <Route path="/places" Component={Places}/>
                    <Route path="/hotels" Component={Hotels}/>
                    <Route path="/restaurents" Component={Combiner} />
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default MainRout;