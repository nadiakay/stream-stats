import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import styles from "./Table.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Artist</th>
            <th className={styles.tableHeader}>Listeners</th>
            <th className={styles.tableHeader}>Scrobbles</th>
          </tr>
        </thead>
        <tbody>
          {slice.map(el => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.artist}</td>
              <td className={styles.tableCell}>{el.listeners}</td>
              <td className={styles.tableCell}>{el.scrobbles}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
};

export default Table;
