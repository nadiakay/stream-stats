import React from 'react';

export const Artists = props => {
  const res = props.data;
  let artists;
    artists = res.artist.map(artist => {
      return <Artist name={artist.name} playcount={artist.playcount} listeners={artist.listeners}/>;
    })
  return (
  <div>
    <h2>Top Artists</h2>
    <table>
      <thead>
        <tr>
          <th>Artist</th>
          <th>Streams</th>
          <th>Listeners</th>
        </tr>
      </thead>
      <tbody>
        {artists}
      </tbody>
    </table>
</div>
  )
}

export const Artist = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.playcount}</td>
      <td>{props.listeners}</td>
    </tr>
  )
}