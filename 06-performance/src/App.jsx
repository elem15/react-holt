import React, { lazy, Suspense, useContext, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptPetContext from "./AdoptPetContext";
const Details = lazy(() => import("./components/Details"));
import SearchParams from "./components/SearchParams";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  const adoptPet = useState();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptPetContext.Provider value={adoptPet}>
          <Suspense
            fallback={
              <div className="loading-pane">
                <h2 className="loader">🌀</h2>
              </div>
            }
          >
            <header>
              <Link to="/">Adopt me</Link>{" "}
            </header>
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </Suspense>
        </AdoptPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
