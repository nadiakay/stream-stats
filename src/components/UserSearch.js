import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { artistsSelector } from '../slices/artists'

import { setUser, setPage } from '../slices/artists'

export const UserSearch = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(artistsSelector)

  const [query, setQuery] = useState(user)

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault()
        e.currentTarget.reset()
        dispatch(setUser(query))
        dispatch(setPage(1))
        setQuery(``)
      }}
    >
      <label htmlFor="user-search" className="p-2">
        Enter username:{' '}
      </label>
      <input
        type="text"
        placeholder="user"
        className="search-bar"
        id="user-search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  )
}
