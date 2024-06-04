import List from "../List/list";
import Siva from "../mapS/map";
import MyNavbar from "../navBar/navv";
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import './combiner'
import useScreenWidth from "../screenSize/screensizE";

export const TotalData=createContext()

const Combiner=()=>{
    const screen_width = useScreenWidth()
    const [city,setCity]=useState(null)
    const [centre1,setCentre1]=useState(12.91285)
    const [centre2,setCentre2]=useState(100.87808)
    const [list,setList]=useState([])


 const catchCenter = (lat,long)=>{
      setCentre1(lat)
      setCentre2(long)
 }

// console.log('app.js = ',centre1,centre2)

  useEffect(()=>{
    setList([])
    dataFetch()
  },[centre1,centre2])

  const dataFetch= async ()=>{
    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
      //https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng
      params: {
        latitude: centre1,
        longitude: centre2,
      },
      headers: {
        'x-rapidapi-key': '288f61553emsh9f2d58ac0286771p16f382jsn6c937cd75890',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    };

    try {
        const response = await axios.request(options);
        console.log('<<<<<======',response)
        // setList(response.data.data)
        setList(response.data.data)
    } catch (error) {
        console.error(error);
    }
  }
//   console.log(list)

    return(
        <>
            <MyNavbar/>
            <div className="parentForMapList">
              <TotalData.Provider value={{
                catchCenter,list
                  }}>
                    {
                      screen_width < 992 ?
                      (
                        <div className={'mobileTab'}>
                          <Siva className={Siva}/>
                          <List />
                        </div>
                      )
                      :
                      (
                        <div style={{display:'flex'}} className={'lTop'}>
                          <div style={{width:`40%`}}><List/></div>
                          <div style={{width:`60%`}}><Siva/></div>
                        </div>
                      )
                    }
                    
              </TotalData.Provider>
            </div>
        </>
    )
}


export default Combiner;