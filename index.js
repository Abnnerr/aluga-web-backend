const express = require("express");
const app = express();
const cors = require('cors')
const port = 8000;

const usuariosRoutes = require('./src/routes/usuariosRoutes.js');
const imoveisRoutes = require('./src/routes/usuariosRoutes.js');
const { cadastro, login } = require("./src/controllers/usuariosController.js");
const {buscarImovel, criarImovel} = require("./src/controllers/imoveisController.js");
const { favoritar } = require("./src/controllers/favoritosController.js");

app.use(cors())
app.use(express.json())

app.post("/cadastro", async (req,res) => {
    res.send(await  cadastro(req.body))
})
app.post('/login', async (req,res) => {
    res.send(await login(req.body))
})

app.post('/favoritos', async (req,res) => {
    res.send( await favoritar(req.body))
})
app.post('/imoveis', async (req, res) => {
    res.send(await buscarImovel(req.body) )
})
app.post('/cadastrar-imoveis', async (req, res) => {
    res.send(await criarImovel(req.body))
})



app.listen(port, () => {
    console.log(`servidor de pé: http://localhost:${port}`)
})