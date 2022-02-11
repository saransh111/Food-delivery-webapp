import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import {Link} from "react-router-dom";

var dist;
function Map() {
    const [LAT, setLAT] = useState();
    const [long, setlong] = useState();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position)=>{
            setLAT(position.coords.latitude);
            setlong(position.coords.longitude);
        })
        console.log(LAT);
        console.log(long);
        var R = 6378137;
        var dLat = (LAT-26.893192) * Math.PI / 180;
        var dLng = (long-76.337524) * Math.PI / 180;
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(26.893192 * Math.PI / 180 ) * Math.cos(LAT * Math.PI / 180 ) *
        Math.sin(dLng/2) * Math.sin(dLng/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        localStorage.setItem('distance', Math.ceil(R*c/1000));
        localStorage.setItem('time', Math.ceil((R*c)/717.669444444));
    })
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 26.893192, lng: 76.337524 }}
    >
        <Marker
          position={{
            lat: 26.893192,
            lng: 76.337524
          }}
        />
        <Marker
          position={{
            lat: LAT,
            lng: long
          }}
        />
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function Tracker() {
    const b=localStorage.getItem('distance');
    const a=localStorage.getItem('time');
    const c=Math.floor(a/60);
    const d=a-c*60;
  return (
    <div style={{ width: "50vw", height: "50vh", margin: "10% 25% 25% 25%"}}>
        <h1>Track your food </h1>
        <button><Link to = "/">continue shopping</Link></button>
    <MapWrapped
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCzQeXKIG80k_5IlnHHqh-s-IoLAAdqtRs`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    <h1> Distance : {b} kilometers</h1>
     <h1> Estimated Time: {c} hours {d} minutes</h1>
  </div>
  );
}