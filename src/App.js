import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Activites from "./components/Activites";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activites />
    </div>
  );
}

export default App;
