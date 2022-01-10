import React from 'react';
import ArtistContextProvider from './context/ArtistContext';
import { Container } from './components/Container';

import './App.css';

export const App = () => {
  return (
    <div className="App">
    <ArtistContextProvider>
      <h1>Streaming Stats</h1>
      <p>data from last.fm</p>
      <Container />
    </ArtistContextProvider>
    </div>
  )
}