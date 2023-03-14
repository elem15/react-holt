import React from "react";
import { createRoot } from "react-dom/client";

import Pet from './Pet';

const App = () => {
  return <div>
    <h1>Adopt me</h1>
    <Pet name="Arden" animal="dog" breed="sheep-dog" id="fda" />
    <Pet name="Murzik" animal="cat" breed="mine-coon" id="ffdda" />
  </div>
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
