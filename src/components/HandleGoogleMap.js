import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./App.css";

const HandleGoogleMap = props => {
  const { lat, lng } = props;
  const style = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  };
  console.log(lat);
  console.log(lng);
  return (
    <div className="mapWrapper clearfix">
      <Map
        google={props.google}
        style={style}
        center={{ lat: lat, lng: lng }}
        zoom={12}
        initialCenter={{
          lat: 37.57,
          lng: 126.98
        }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDdqIx3DfE5UDXOnF1HIA0w5WY-40r6P8k"
})(HandleGoogleMap);
