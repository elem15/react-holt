import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./components/SearchParams";
import AdoptPetContext from "./AdoptPetContext";
import { Pet } from "./types/APIResponses";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  const adoptPet = useState(null as Pet | null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptPetContext.Provider value={adoptPet}>
          <header>
            <Link to="/">Adopt me</Link>{" "}
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </AdoptPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
if (!container) throw new Error("No root element to render");
const root = createRoot(container);
root.render(React.createElement(App));
