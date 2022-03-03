import cors from "cors";
import express from "express";
import { config } from "dotenv";
import routes from "./api/routes/routes.js";
import { redisCli } from "./api/model/index.js";
import initializeTable from "./api/helper/initializeTable.js";

config();

await initializeTable();

const PORT = 5000;

const app = express();

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:4050",
  `http://localhost:${PORT}`,
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
};

app.set("trust proxy", 1);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
