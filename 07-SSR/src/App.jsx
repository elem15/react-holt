import React, { lazy, Suspense, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptPetContext from "./AdoptPetContext";
const Details = lazy(() => import("./components/Details"));
const SearchParams = lazy(() => import("./components/SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
    },
  },
});
const App = () => {
  const adoptPet = useState();
  return (
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
  );
};
export default App;
