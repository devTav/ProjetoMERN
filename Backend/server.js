import express from 'express';

const app = express();

app.get("/", (req,res) => {
    res.send("Servidor pronto")
})

app.listen(5000, () => {
    console.log("Server rodando em: http://localhost:5000");
});