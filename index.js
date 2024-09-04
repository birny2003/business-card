import React from "react";
import ReactDOM from "react-dom";
import Info from "./info";
import About from "./about";
import SocialsFooter from "./SocialsFooter";

import "./style.css";
function App() {
  return (
    <div>
      <Info />
      <About />
      <SocialsFooter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
