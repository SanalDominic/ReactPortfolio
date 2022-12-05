import React from "react";

import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
