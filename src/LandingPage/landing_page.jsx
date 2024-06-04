import { Link } from "react-router-dom";
import NavForLander from "../navBar/navForLander";
import styles from "./landing.module.css";

const Lander = () => {
  return (
    <div className="mainDiv" style={{ height: `100vh` }}>
      <NavForLander />
      <marquee style={{ fontSize: "10vh" }}>
        &#128663; &#128661; &#128665; &#128654;
      </marquee>
      <div
        style={{ fontSize: `500%`, textAlign: "center", fontWeight: `bolder` }}
      >
        <i>TRAVEL</i>
      </div>
      <div
        style={{ fontSize: `100%`, textAlign: "center", fontWeight: `bolder` }}
      >
        <i>GUIDER</i>
      </div>
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
      {/* <div style={{border:'2px solid red',width:'100vh',height:'70vh'}}> */}

      {/* </div> */}
    </div>
  );
};

export default Lander;
