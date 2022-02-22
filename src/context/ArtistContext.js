import React, { createContext, useState } from "react";
import axios from "axios";
export const ArtistContext = createContext();

const API_KEY = "5e7443ce206de81a5b342b82bcd4096b";

const ArtistContextProvider = props => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const handlePager = page => {
    setPage(page);
    console.log(page);
    setLoading(true);
    getTopArtists(page);
  };

  const getTopArtists = page => {
    if (loading)
      axios
        .get(
          `http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&format=json&api_key=${API_KEY}&page=${page}`
        )
        .then(res => {
          setArtists(res.data.artists);
          setLoading(false);
        })
        .catch(err => {
          console.log("Error fetching artists...: ", err);
        });
  };

  return (
    <ArtistContext.Provider
      value={{ artists, loading, page, handlePager, getTopArtists }}
    >
      {props.children}
    </ArtistContext.Provider>
  );
};

export default ArtistContextProvider;
