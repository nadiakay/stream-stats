import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchArtists, artistsSelector } from '../slices/artists'
import { ArtistTable } from './ArtistTable'
import { Pager } from './Pager'
import { UserSearch } from './UserSearch'

export const ArtistsPage = () => {
  const dispatch = useDispatch()
  const { user, page, totalPages, loading, hasErrors, artists } =
    useSelector(artistsSelector)

  useEffect(() => {
    dispatch(fetchArtists(user, page))
  }, [dispatch, user, page])

  const renderArtists = () => {
    if (loading)
      return (
        <tr>
          <td>Loading artists...</td>
        </tr>
      )
    if (hasErrors)
      return (
        <tr>
          <td>Error retrieving artists.</td>
        </tr>
      )
    return <ArtistTable data={artists.artist} page={page}></ArtistTable>
  }

  return (
    <div className="container mb-5">
      <h2 className="m-5">Top Artists for {user}</h2>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <UserSearch />
          <Pager page={page} totalPages={totalPages} />
          {renderArtists()}
        </div>
      )}
    </div>
  )
}
