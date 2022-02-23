import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  user: 'WojPaint',
  page: 1,
  totalPages: 1,
  loading: true,
  hasErrors: false,
  artists: [],
}

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload
    },
    setPage: (state, { payload }) => {
      state.page = payload
    },
    setTotalPages: (state, { payload }) => {
      state.totalPages = payload
    },
    getArtists: (state) => {
      state.loading = true
    },
    getArtistsSuccess: (state, { payload }) => {
      state.artists = payload
      state.loading = false
      state.hasErrors = false
    },
    getArtistsFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const {
  setUser,
  setPage,
  setTotalPages,
  getArtists,
  getArtistsSuccess,
  getArtistsFailure,
} = artistsSlice.actions

export const artistsSelector = (state) => state.artists

export default artistsSlice.reducer

export function fetchArtists(user, page) {
  return async (dispatch) => {
    const url = `http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=${user}&format=json&api_key=5e7443ce206de81a5b342b82bcd4096b&page=${page}&limit=5`
    dispatch(getArtists())

    try {
      const res = await axios.get(url)
      const data = res.data.topartists
      dispatch(getArtistsSuccess(data))
      console.log(data[`@attr`])
      dispatch(setTotalPages(data['@attr'].totalPages))
      console.log(res)
    } catch (err) {
      dispatch(getArtistsFailure())
    }
  }
}
