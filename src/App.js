import React from "react";

// Importing the Navigation Component
import Navigation from "./components/navigation/Navigation";

// Importing the page components
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skillset from "./components/pages/Skillset";
import Skills from "./components/pages/Skills";
import OtherSkills from "./components/pages/OtherSkills";
import Projects from "./components/pages/Projects";
import ContactMe from "./components/pages/ContactMe";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Skillset />
      <Skills />
      <OtherSkills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
