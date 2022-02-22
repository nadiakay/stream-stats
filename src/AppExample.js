import React, { useState } from "react";

import countriesData from "./countries";
import styles from "./App.css";
import Table from "./components/table";

export const App = () => {
  const [countries] = useState([...countriesData]);
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Table data={countries} rowsPerPage={4} />
      </div>
    </main>
  );
};
