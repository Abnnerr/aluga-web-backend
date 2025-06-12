const { prisma } = require("../services");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const saltRolts = 10;


async function cadastro(dados) {


    try {
        let senhaCriptografada = await bcrypt.hash(dados.usuario_senha, saltRolts)
        dados = {...dados, usuario_senha: senhaCriptografada}
        
        const existe = await prisma.usuarios.findFirst({
            where: {
                usuario_email: dados.usuario_email
            }
        })
        if (existe) {
            return {
                tipo: "warning",
                message: "email ja existe"
            }
        }
        return await prisma.usuarios.create({
            data: dados
        })
    } catch (error) {
        return {
            tipo: "erro",
            message: error.message
        }
    }
}

// async function login(dados) {

//     try {
//         let usuario = await prisma.usuarios.findFirst( {
//             where: {
//                 usuario_email: dados.usuario_email
//             }
//         })
//         if (usuario) {
//             let verificarSenha = bcrypt.compare(dados.usuario_senha, usuario.usuario_senha)

//             if (verificarSenha) {
//                 let token = jwt.sign({usuario.usuario_senha})
//             }
//         }
//     } catch (error) {
        
//     }
// }


module.exports = {
    cadastro
}