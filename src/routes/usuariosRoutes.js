const {buscarUsuarios, criarUsuario, editarUsuario} = require("../controllers/usuariosController.js") 
const router = require("express").Router()


router.get('/☻', async (req, res) => {
    res.send( await buscarUsuarios())
})
router.post('/',async (req,res) => {
    res.send(await criarUsuario(req.body))
})
router.put('/:id', async (req, res) => {
    res.send(await  editarUsuario(req.params.id, req.body))
})

module.exports = router;