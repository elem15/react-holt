import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import UseCallback from './routes/UseCallback';
import UseIdComponent from './routes/UseId';
import LayoutEffectComponent from './routes/UseLayoutEffect';
import UseMemo from './routes/UseMemo';
import UseReducer from './routes/UseReducer';
import UseRef from './routes/UseRef';


const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link> | {' '}
        <Link to="/useRef">useRef</Link> | {' '}
        <Link to="/useReducer">useReducer</Link> | {' '}
        <Link to="/useMemo">useMemo</Link> | {' '}
        <Link to="/useCallback">useCallback</Link> | {' '}
        <Link to="/useId">useId</Link> | {' '}
        <Link to="/LayoutEffectComponent">useLayoutEffectComponent</Link> | {' '}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useId" element={<UseIdComponent />} />
        <Route path="/LayoutEffectComponent" element={<LayoutEffectComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
