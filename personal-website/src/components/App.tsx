import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
