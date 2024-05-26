
import Hero from "./Hero.jsx";
import Section2 from "./Section2.jsx"
import AboutUs from "../Components/AboutUs.jsx"
import Testinomial from "./Testinomial.jsx";
import OurClient from "../Components/OurClient.jsx";
import Contact from "../Components/Contact.jsx";
export default function Route(){
    return(
        <div className="flex flex-col gap-4">
        
      <Hero/>
      <Section2/>
      <AboutUs/>
      <OurClient/>
      <Testinomial/>
      <Contact/>
        </div>
    );
}