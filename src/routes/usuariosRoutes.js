
// const router = require("express").Router();

// const {buscarUsuarios, criarUsuario, apagarUsuario } = require("../controller/usuariosController.js");
// const { rotaProtegida } = require("../utils/index.js");


// router.get("/", async (req, res) => {
//   res.send(await buscarUsuarios());
// });

// router.post("/", rotaProtegida , async (req, res) => {
//   res.send( await criarUsuario(req.body));
// });
// router.put("/:id", rotaProtegida , async (req, res) => {
//   res.send(`Edita um usuario id: ${req.params.id}`);
// });
// router.delete("/:id", rotaProtegida , async (req, res) => {
//   res.send(await apagarUsuario(req.params.id));
// });



// module.exports = router;