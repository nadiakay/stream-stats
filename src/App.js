import React from 'react';
import ArtistContextProvider from './context/ArtistContext';
import { Container } from './components/Container';

import './App.css';

export const App = () => {
  return (
    <div className="App">
    <ArtistContextProvider>
      <header>
        <h1>Latest Streaming Stats</h1>
      </header>
      <Container />
      <p>by <a href='https://github.com/nadiakay'>nadia</a></p>
      <p>data from <a href='https://last.fm'>last.fm</a></p>
    </ArtistContextProvider>
    </div>
  )
}