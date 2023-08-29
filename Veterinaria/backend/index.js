import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";


const app = express();

dotenv.config();
conectarDB();

app.use("/", (req, res) => {
  res.send("Holis");
});

app.listen(4000, () => {
  console.log("El servidor está en el puerto 4000");
});
