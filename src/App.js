import React from "react";
import ArtistContextProvider from "./context/ArtistContext";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { ArtistsPage } from "./components/ArtistsPage";
import { Footer } from "./components/Footer";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <ArtistContextProvider>
        <Header />
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<ArtistsPage page="1" />} />
          </Routes>
        </HashRouter>
        <Footer />
      </ArtistContextProvider>
    </div>
  );
};
