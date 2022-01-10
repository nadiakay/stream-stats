import React, { createContext, useState } from 'react';
import axios from 'axios';
export const ArtistContext = createContext();

const API_KEY = '5e7443ce206de81a5b342b82bcd4096b';

const ArtistContextProvider = props => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getTopArtists = () => {
    if(loading) axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&format=json&api_key=${API_KEY}&limit=12`
    )
    .then(res => {
      setArtists(res.data.artists);
      setLoading(false);
    })
    .catch(err => {
      console.log('Error fetching artists...: ', err);
    });
  };

  return (
    <ArtistContext.Provider value={{ artists, loading, getTopArtists }}>
      {props.children}
    </ArtistContext.Provider>
  );
}

export default ArtistContextProvider;