import "dotenv/config"
import express from "express";
import rotas from "./router/export/export-router.js";

const app = express();

app.use(express.json());
app.use(rotas);
// app.use((err, req, res, next) => {
//     console.log(err);

//     const statusCode = err.status || 500; // Se o erro não tiver status, usar 500
//     const mensagem = err.message || 'Erro no servidor';

//     return res.status(statusCode).json({ mensagem });
// });

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running http://localhost:${port}`))