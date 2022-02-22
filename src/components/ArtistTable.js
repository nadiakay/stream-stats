import React from "react";
import { Table } from "reactstrap";
import { Pager } from "./Pager";

export const ArtistTable = ({ data, page, setPage }) => {
  const range = [1, 2, 3, 4, 5];

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Streams</th>
            <th>Listeners</th>
          </tr>
        </thead>
        <tbody>
          {data.artist.map((el, index) => (
            <tr key={index}>
              <td>{el.name}</td>
              <td>{Intl.NumberFormat().format(el.playcount)}</td>
              <td>{Intl.NumberFormat().format(el.listeners)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pager range={range} page={page} setPage={setPage} />
    </div>
  );
};
