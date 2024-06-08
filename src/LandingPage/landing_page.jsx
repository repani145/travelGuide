import { Link } from "react-router-dom";
import NavForLander from "../navBar/navForLander";
import styles from "./landing.module.css";
import useScreenWidth from "../screenSize/screensizE";
import Footer from "../footer/footer";
import Curo11 from "../Card/curosel";


const data1 = {
  ipath:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/The_Charminar_on_a_cloudy_day.jpg/1280px-The_Charminar_on_a_cloudy_day.jpg',
  title:'Resrurents',
  description:'here you can find the delisious food'
}

const Lander = () => {
  const screen_width = useScreenWidth()


  return (
    <div className="mainDiv" style={{ height: `100vh` }}>
      <NavForLander />
      {/* <marquee style={{ fontSize: "10vh" }}>
        &#128663; &#128661; &#128665; &#128654;
      </marquee> */}
      <Curo11/>
      <div
        style={{textAlign:'center'}}
      >
        <span style={{ fontSize: `500%`, textAlign: "center", fontWeight: `bolder` }}><i>TRAVEL</i></span>
        <span><i><b>GUIDER</b></i></span>
      </div>
      {
        screen_width<992 ?

        <>
          <div class="d-grid p-2 justify-content-around align-content-center div3">
        <Link to={"/restaurents"}>
          <div class={styles.cd3}></div>
          <span><i>RESTARUENTS</i></span>
        </Link>
        <Link to={"/places"}>
          <div className={styles.cd1}></div>
          <span><i>ATTRACTIONS</i></span>
        </Link>
        <Link to={"/hotels"}>
          <div className={styles.cd2}></div>
          <span><i>HOTELS</i></span>
        </Link>
      </div>
       <Footer prop={{stle:'grid'}}/>
        </>
        :

        <>
          <div class="d-flex p-2 justify-content-around align-content-center div3">
        <Link to={"/restaurents"}>
          <div class={styles.cd3}></div>
          <span><i>RESTARUENTS</i></span>
        </Link>
        <Link to={"/places"}>
          <div className={styles.cd1}></div>
          <span><i>PLACES</i></span>
        </Link>
        <Link to={"/hotels"}>
          <div className={styles.cd2}></div>
          <span><i>HOTELS</i></span>
        </Link>
      </div>
      <Footer prop={{stle:'flex'}}/>
        </>

      }
      
      
      {/* <div style={{border:'2px solid red',width:'100vh',height:'70vh'}}> */}
      {/* </div> */}
    </div>
  );
};



export default Lander;