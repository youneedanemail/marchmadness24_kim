// Kimberly March Madness Project 2024

import React from "react";
import "./App.css";
import data from "./CollegeBasketballTeams.json";

// Header
function Welcome() {
  return <h1>Welcome To March Madness 2024</h1>;
}

// Info/Description
function Intro() {
  return (
    <div>
      <h3>
        Join us for the madness of basketball this year <br />
        as we watch teams go head-to-head for the this year's championship win.
      </h3>
      <p>Check out the teams below:</p>
    </div>
  );
}

// Interface

// Bring in json

function App() {
  return (
    <div className="App">
      <Welcome />
      <Intro />
    </div>
  );
}

export default App;
