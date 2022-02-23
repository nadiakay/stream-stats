import { Table } from 'reactstrap'

export const ArtistTable = ({ data, page }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Artist</th>
            <th>Scrobbles</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => (
            <tr key={index}>
              <td>{(page - 1) * 50 + index + 1}</td>
              <td>{el.name}</td>
              <td>{Intl.NumberFormat().format(el.playcount)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
