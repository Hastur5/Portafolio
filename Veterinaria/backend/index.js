import express from "express";
import conectarDB from "./config/db.js";

const app = express();

app.use("/", (req, res) => {
  res.send("Holis");
});

app.listen(4000, () => {
  console.log("El servidor está en el puerto 4000");
});

