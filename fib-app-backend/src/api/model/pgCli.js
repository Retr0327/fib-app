import PG from "pg";
import keys from "../constants/keys.js";

let { pgUser, pgHost, pgDatabase, pgPassword, pgPort } = keys;

const FIB_APP = new PG.Pool({
  user: pgUser,
  host: pgHost,
  database: pgDatabase,
  password: pgPassword,
  port: pgPort,
});

await FIB_APP.connect()

export default FIB_APP;
