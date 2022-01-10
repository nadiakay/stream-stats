import React, { useContext, useEffect } from 'react';
import { ArtistContext } from '../context/ArtistContext';
import { Artists } from './Artists';

export const Container = () => {
  const { artists, loading, getTopArtists } = useContext(ArtistContext);
  useEffect(() => {
    getTopArtists();
  });

  return (
    <div className="container mb-5">
      {loading ? <p>loading...</p> : <Artists data={artists} />}
    </div>
  );
};