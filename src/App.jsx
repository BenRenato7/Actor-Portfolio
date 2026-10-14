import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery"; 
import SelectedStills from "./components/SelectedStills";
import Showreel from "./components/Showreel";
import InTheirWords from "./components/InTheirWords";
import About from "./components/About";
import Resume from "./components/Resume";
 <InTheirWords />
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

const Home = () => {
  return (
      <div className="bg-black">
      <Header />
      <Hero />
      <Gallery />
       <SelectedStills />
      <Showreel />
      <About />
      <Resume />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
