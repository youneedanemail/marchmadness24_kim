// Kimberly March Madness Project 2024

import React from "react";
import "./App.css";
// Bring in json
import data from "./CollegeBasketballTeams.json";

// Interface - will just store the info we want from the json
interface TeamInfo {
  school: string;
  name: string;
  city: string;
  state: string;
}

// assign data as an array to a variable - stores just the variables we set in the interface from the json data
const bbTeams: TeamInfo[] = data.teams;

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
      <br />
    </div>
  );
}

// Class Component Practice (interface goes in the <>)
class Team extends React.Component<TeamInfo> {
  render() {
    const oneTeam = this.props;
    // return the team "card" with the info and display structure I want
    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h4>Mascot: {oneTeam.name}</h4>
        <h4>
          Location: {oneTeam.city}, {oneTeam.state}
        </h4>
        <br />
        <br />
      </div>
    );
  }
}

// function to iterate through all of the teams
function TeamList() {
  return (
    <div>
      {bbTeams.map((eachTeam) => (
        <Team {...eachTeam} />
      ))}
    </div>
  );
}

// contains functions I want displayed
function App() {
  return (
    <div className="App">
      <Welcome />
      <Intro />
      <TeamList />
    </div>
  );
}

export default App;
