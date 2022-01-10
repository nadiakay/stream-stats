import React from 'react';
import ArtistContextProvider from './context/ArtistContext';
import { Container } from './components/Container';

import './App.css';

export const App = () => {
  return (
    <ArtistContextProvider>
      <h1>Streaming Stats</h1>
      <p>Data from last.fm</p>
      <Container />
    </ArtistContextProvider>
  )
}