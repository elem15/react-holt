import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import SearchParams from "./components/SearchParams";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <header>
          <Link to="/">Adopt me</Link>{" "}
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
if (!container) throw new Error("No root element to render");
const root = createRoot(container);
root.render(React.createElement(App));
