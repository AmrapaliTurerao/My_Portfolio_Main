import React from "react";
import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Skills from "./component/skills/Skills";
import Services from "./component/services/Services";
import Qualification from "./component/qualification/Qualification";
import Work from "./component/work/Work";
import Testimonial from "./component/testimonial/Testimonial";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import Scrollup from "./component/scrollup/Scrollup";


function App() {
  return (
    <div>
      <Header />
      <main className="mein">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonial />
        <Contact />
      </main>
        <Footer />
        <Scrollup />
    </div>
  );
}

export default App;
