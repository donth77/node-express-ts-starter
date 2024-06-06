import express from "express";

const routes = express.Router();

routes.get("/", (_, res) => {
  res.status(200).send("Express + TypeScript API");
});

export default routes;
