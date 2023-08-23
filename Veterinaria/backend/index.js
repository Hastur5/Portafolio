import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("Holis");
});

app.listen(4000, () => {
  console.log("El servidor está en el puerto 4000");
});
