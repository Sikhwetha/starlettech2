import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./page/About";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Services from "./page/Services";
import Footer from "./utils/Footer";
import Navbar from "./utils/Navbar";

import "./index.css";

import "./style/style.css";
import "./style/utils.css";
import WebDesign from "./page/WebDesign";
import Branding from "./page/Branding";
import Hosting from "./page/Hosting";
import DigitalMarketing from "./page/DigitalMarketing";
import AppDevelopment from "./page/AppDevelopment";

import Aos from "aos";
import "aos/dist/aos.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/webDesign" element={<WebDesign />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/digital" element={<DigitalMarketing />} />
          <Route path="/appdevelopment" element={<AppDevelopment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
