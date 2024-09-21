import express from "express";
import rotas from "./router/export/export-router.js";

const app = express();

app.use(rotas);
app.use(express.json());

const port = 3000;

app.listen(port, () => console.log(`Server running http://localhost:${port}`))