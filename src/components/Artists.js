import React from 'react';
import { Table } from 'reactstrap';

export const Artists = props => {
  const res = props.data;
  let artists;
    artists = res.artist.map(artist => {
      return <Artist key={artist.name} name={artist.name} playcount={artist.playcount} listeners={artist.listeners}/>;
    })
  return (
  <div className="artists">
    <h2 className="mb-3">Top Artists</h2>
    <Table>
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
    </Table>
</div>
  )
}

export const Artist = props => {
  const intl = new Intl.NumberFormat();
  return (
    <tr>
      <td>{props.name}</td>
      <td>{intl.format(props.playcount)}</td>
      <td>{intl.format(props.listeners)}</td>
    </tr>
  )
}