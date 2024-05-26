import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Components/Header.jsx";
import Route from "./Pages/Route.jsx"
import Footer from "./Components/Footer.jsx";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <div className="">
      <Header />
      <Route/>
      <Footer/>
    </div>
  );
};

export default App;
