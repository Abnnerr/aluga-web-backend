const express = require("express");
const app = express();
const port = 8000;

const usuariosRoutes = require('./src/routes/usuariosRoutes.js')

app.use(express.json())


app.use("/usuarios", usuariosRoutes)

app.listen(port, () => {
    console.log(`servidor de pé: http://localhost:${port}`)
})