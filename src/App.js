import React from "react";
import About from "./components/About";
// import Contact from "./components/Contact";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

// import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-black bg-red-300 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}

