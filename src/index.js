import "dotenv/config"
import express from "express";
import cors from "cors";
import rotas from "./router/export/export-router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(rotas);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running http://localhost:${port}`))