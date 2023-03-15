import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Details from './Details';

import SearchParams from "./SearchParams";
const App = () => {
  return (
    <BrowserRouter>
      <header><Link to="/">Adopt me</Link> </header>

      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
