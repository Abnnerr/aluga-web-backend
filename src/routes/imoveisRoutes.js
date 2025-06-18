
const router = require("express").Router()

const { criarImoveis } = require("../controller/imoveisController.js");

router.post("/", async (req, res) => {
    res.send(await criarImoveis(req.body));
});


const { buscarImovel, criarImovel, editarImovel, apagarImovel } = require("../controller/produtosController")


router.get("/", async (req, res) => {
    res.send(await buscarImovel())

})
router.get("/:id", async (req, res) => {
    res.send(await buscarImovel(req.params.id))
})
router.post("/", async (req, res) => {
    res.send(await criarImovel(req.body))
})
router.put("/:id", async (req, res) => {
    res.send(await editarImovel(req.params.id, req.body))
})
router.delete("/:id", async (req, res) => {
    res.send(await apagarImovel(req.params.id))
})

module.exports = router;