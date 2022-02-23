import { Table } from "reactstrap";

export const ArtistTable = ({ data, page }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Artist</th>
            <th>Streams</th>
            <th>Listeners</th>
          </tr>
        </thead>
        <tbody>
          {data.artist.map((el, index) => (
            <tr key={index}>
              <td>{(page - 1) * 50 + index + 1}</td>
              <td>{el.name}</td>
              <td>{Intl.NumberFormat().format(el.playcount)}</td>
              <td>{Intl.NumberFormat().format(el.listeners)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
