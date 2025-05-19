import express, { json } from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'; 

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()) // middleware p/ dados JSON no req.body

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server rodando em: http://localhost:${PORT}`);
});