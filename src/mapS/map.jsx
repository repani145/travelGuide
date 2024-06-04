import React, { useState, useRef, useEffect, useContext } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";
import { TotalData } from "../combiner/combiner";

const containerStyle = {
  width: "100%",
  height: "90vh",
};

const center = {
  lat: 17.4065,
  lng: 78.4772,
};

// const locations = [
//   { lat: -3.745, lng: -38.523 },
//   { lat: -3.745, lng: -38.528 },
//   { lat: 16.5062, lng: 80.6480 }
// ];

const Siva = () => {
  const { catchCenter , list } = useContext(TotalData);
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(center);
  const [centerCoords, setCenterCoords] = useState(center);
  const autocompleteRef = useRef(null);
  const [locationList,setLocationList] = useState([])

  useEffect(()=>{
    setLocationList([])
    locations_function()
  },[catchCenter])

  const locations_function = ()=>{
    list.length ?
      list.map((eachObj)=>{
        if(eachObj.latitude && eachObj.longitude){
          setLocationList(state=>[...state,{lat:(eachObj.latitude*1),lng:(eachObj.longitude*1)}])
        }
      }
    )
    :
    setLocationList([])
  }
  // console.log('log_lat_List =',locationList)

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const onBoundsChanged = () => {
    if (map) {
      const center = map.getCenter();
      setCenterCoords({
        lat: center.lat(),
        lng: center.lng(),
      });
    }
  };

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place.geometry) {
      const location = place.geometry.location;
      setPosition({
        lat: location.lat(),
        lng: location.lng(),
      });
      map.panTo(location);
    }
  };

  useEffect(() => {
    if (map) {
      map.addListener("bounds_changed", onBoundsChanged);
    }
  }, [map]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB30MCbpr_zr-1xkPl2IhnB-lY4c8oqzVk"
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={12}
        onLoad={onLoad}
        onBoundsChanged={onBoundsChanged}
      >
        <Autocomplete
          onLoad={(autocomplete) => {
            autocompleteRef.current = autocomplete;
          }}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Search for places"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
              top: "10px",
            }}
          />
          
        </Autocomplete>
        <Marker position={center}/>
        {locationList.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
   
      </GoogleMap>
 
      {setTimeout(() => {
        catchCenter(centerCoords.lat, centerCoords.lng);
      }, 400)}
    </LoadScript>
  );
};

export default Siva;
