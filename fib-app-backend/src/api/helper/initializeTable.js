import { FIB_APP } from "../model/index.js";

async function initializeTable() {
  return FIB_APP.query(
    "CREATE TABLE IF NOT EXISTS values (number INT)",
    [],
    (err, res) => {
      if (err) {
        console.log(err.stack);
      }
    }
  );
}

export default initializeTable;
