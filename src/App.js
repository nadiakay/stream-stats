import React from 'react';
import ArtistContextProvider from './context/ArtistContext';
import { Container } from './components/Container';

import './App.css';

export const App = () => {
  return (
    <div className="App">
    <ArtistContextProvider>
      <h1 className="mb-5">Streaming Stats</h1>
      <Container />
      <p>by <a href='https://github.com/nadiakay'>nadia</a></p>
      <p>data from <a href='https://last.fm'>last.fm</a></p>
    </ArtistContextProvider>
    </div>
  )
}