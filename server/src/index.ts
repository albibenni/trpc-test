import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
