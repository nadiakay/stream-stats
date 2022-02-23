import React, { useContext, useEffect } from "react";
import { ArtistContext } from "../context/ArtistContext";
import { ArtistTable } from "./ArtistTable";
import { Pager } from "./Pager";

export const ArtistsPage = () => {
  const { artists, loading, page, totalPages, handlePager, getTopArtists } =
    useContext(ArtistContext);
  const range = [1, 2, 3, 4, 5];
  useEffect(() => {
    getTopArtists(page);
    console.log(totalPages);
  });

  return (
    <div className="container mb-5">
      <h2 className="mt-2">Popular Artists</h2>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <ArtistTable data={artists} page={page} />
          <Pager range={range} page={page} handlePager={handlePager} />
        </div>
      )}
    </div>
  );
};
