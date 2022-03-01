import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { ArtistsPage } from './components/ArtistsPage'

import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ArtistsPage />} />
        </Route>
      </Routes>
    </div>
  )
}
