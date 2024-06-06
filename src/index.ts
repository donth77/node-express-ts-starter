import express, { Express, Request, Response } from "express";
import routes from "./routes/api";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`[server]: Server running on port ${port}`);
});
