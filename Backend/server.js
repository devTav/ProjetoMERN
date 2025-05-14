import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';

dotenv.config()

const app = express();

app.get("/products", (req,res) => {
    res.send("Servidor pronto")
})

app.listen(5000, () => {
    connectDB();
    console.log("Server rodando em: http://localhost:5000");
});