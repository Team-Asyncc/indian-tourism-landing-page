import React, { useState } from "react";
import "./PopularTrips.css";
import delhi from "./TripImages/Delhi.jpeg";
import hyderabad from "./TripImages/Hyderabad.jpeg";
import chennai from "./TripImages/chennai.jpeg";
import buddha from "./TripImages/buddha.jpeg";
import ladakh from "./TripImages/ladakh.jpeg";
import coast from "./TripImages/coast.jpeg";
import port from "./TripImages/port.jpeg";
import himalayan from "./TripImages/himalayan.jpeg";
import eastern from "./TripImages/eastern.jpeg";


const duration = {
  TwoDays: [
    { img: delhi, title: "48 Hours in Delhi" },
    { img: hyderabad, title: "48 Hours in Hyderabad" },
    { img: chennai, title: "48 Hours in Chennai" },
  ],
  RoadTrips: [
    { img: coast, title: "A Trip Along the Coast" },
    { img: port, title: "A Ride to the Port" },
    { img: ladakh, title: "A Ride to Leh Ladakh" },
  ],
  PanIndia: [
    { img: himalayan, title: "Himalayan Odyssey" },
    { img: buddha, title: "Buddha's Footsteps" },
    { img: eastern, title: "Eastern Vignetts" },
  ],
};

let tripTypes = Object.keys(duration);

export const PopularTrips = () => {
  const [place, setPlaces] = useState(duration.RoadTrips);
  const [backgroundColor, setBackgroundColor] = useState("white");

  function handleChangeColor() {
    const newBg = backgroundColor === "white" ? "blue" : "white";
    setBackgroundColor(newBg);
  }
  function clickEventListener(tripTypes) {
    let userInput = duration[tripTypes];
    setPlaces(userInput);
  }

  return (
    <div className="popular-trips">
      <h1 style={{textAlign:"center" , margin:"2%"}}>Popular Trips</h1>
      <div className="main">
        <div className="btn">
          {tripTypes.map((tripTypes) => {
            return (
              <div className="btn-children">
                <button
                  onClick={() => {
                    clickEventListener(tripTypes);
                    { handleChangeColor()}
                  }}
                >
                  {tripTypes}
                </button>
              </div>
            );
          })}
        </div>
        <div className="list-item-container">
          <div className="list-item">
            {place.map((tripTypes) => {
              return (
                <div className="list">
                  {/* <p>{tripTypes.img}</p> */}
                  <img
                    src={tripTypes.img}
                    alt="place"
                    height="300px"
                    width="100%"
                  />

                  <h3>{tripTypes.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
