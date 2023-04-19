import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Activites from "./components/Activites";
import Booking from "./components/Booking";
import Galary from "./components/Galary";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <Hero />
        <Activites />
        <Booking />
        <Galary />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
