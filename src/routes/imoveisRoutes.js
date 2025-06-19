
const router = require("express").Router()

const { criarImoveis } = require("../controller/imoveisController.js");

<<<<<<< HEAD
// const { buscarImoveis, criarImoveis , apagarImoveis } = require("../controller/imoveisController.js");
// const { rotaProtegida } = require("../utils/index.js");


// router.get("/", async (req, res) => {
//   res.send(await buscarImoveis());
// });

router.post("/", rotaProtegida , async (req, res) => {
  res.send( await criarImoveis(req));
});
router.put("/:id", rotaProtegida , async (req, res) => {
  res.send(`Edita um imovel id: ${req.params.id}`);
});
router.delete("/:id", rotaProtegida , async (req, res) => {
  res.send(await apagarImoveis(req.params.id));
});
=======
router.post("/", async (req, res) => {
    res.send(await criarImoveis(req.body));
});
>>>>>>> a6f1822e1773ba1fe1c410cfba133c237b0b781c


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