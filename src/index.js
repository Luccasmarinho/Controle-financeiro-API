import "dotenv/config"
import express from "express";
import rotas from "./router/export/export-router.js";

const app = express();

app.use(express.json());
app.use(rotas);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running http://localhost:${port}`))