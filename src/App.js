import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Activites from "./components/Activites";
import Booking from "./components/Booking";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activites />
      <Booking />
    </div>
  );
}

export default App;
