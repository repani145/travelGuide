import { useContext, useEffect, useState } from "react"
import { TotalData } from "../combiner/combiner"
import { DNA } from "react-loader-spinner";
import "./list.css";
import useScreenWidth from "../screenSize/screensizE";


const List = (prop)=>{
  const {list} =useContext(TotalData)
  const [timee,setTimee]=useState(true)
  const {withh} = prop;
  useEffect(()=>{
    setTimee(true)
    setTimeout(()=>{
      if(timee){
        setTimee(false)
      }
    },10000)
  },[list])

  return (
    <div className="PList">
      {/* <p style={{ color: "red", textAlign: "center",fontSize:20 }}>
        <i>hotels near to you</i>
      </p> */}
      {
        list.length ? (
          <div className="list">
            {list.map((eachObj, index) => {
              if (eachObj.name) {
                //   console.log(photo.images.medium.url);
                return (
                  <div key={index} className="cd1">
                    <p><b>{eachObj.name}</b></p>
                    {(eachObj.photo)?
                      (
                        <img
                          src={eachObj.photo.images.medium.url}
                          alt="img not found"
                          // width={`90%`}
                        />
                      ) :<img src="#" alt="no image" />
                      }
                    <p>{eachObj.location_string}</p>
                    <p>{eachObj.rating}</p>
                    <button><a style={{textDecoration:'none',color:'black'}} target="_blank" href={eachObj.web_url}>see more</a></button>
                    {/* <p>{eachObj.web_url}</p> */}
                  </div>
                );
              }else{
                console.log('withOut name',eachObj)
              }
            })}
          </div>
        )
        :
        (
          timee ?
            <DNA
            visible={true}
            height="200px"
            width="80%"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            className="loader"
        />
          :
          <h3>no hotels found in this location</h3>
      )

      }
       </div>
  );
}

export default List;