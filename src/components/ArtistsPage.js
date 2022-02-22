import React, { useContext, useEffect } from "react";
import { ArtistContext } from "../context/ArtistContext";
import { ArtistTable } from "./ArtistTable";

export const ArtistsPage = props => {
  const { artists, loading, page, handlePager, getTopArtists } =
    useContext(ArtistContext);
  useEffect(() => {
    getTopArtists(page);
  });

  return (
    <div className="container mb-5">
      {loading ? (
        <p>loading...</p>
      ) : (
        <ArtistTable data={artists} page={page} handlePager={handlePager} />
      )}
    </div>
  );
};
