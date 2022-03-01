import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <header>
        <h1>
          <b>Scrobble Stats</b>
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <p>
          by <a href="https://github.com/nadiakay">nadia</a>
        </p>
        <p>
          data from <a href="https://last.fm">last.fm</a>
        </p>
      </footer>
    </div>
  )
}
