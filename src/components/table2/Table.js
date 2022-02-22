import React, { useState } from "react";
import { Table } from "reactstrap";

export const Table2 = ({ data }) => {
  const [page, setPage] = useState(1);

  return (
    <Table>
      <thead>
        <tr>
          <th>Artist</th>
          <th>Streams</th>
          <th>Listeners</th>
        </tr>
      </thead>
      <tbody>
        {data.map(el => (
          <tr key={el.id}>
            <td>{el.artist}</td>
            <td>{Intl.NumberFormat().format(el.playcount)}</td>
            <td>{Intl.NumberFormat().format(el.listeners)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
