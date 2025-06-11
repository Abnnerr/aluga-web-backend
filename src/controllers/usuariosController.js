const { prisma } = require("../services")

async function buscarUsuarios() {

    return await prisma.usuarios.findMany({})

}

async function busccarUsuario() {

    
    
}

async function criarUsuario(dados) {

    return await prisma.usuarios.create({
        data: dados
    })

}
async function editarUsuario(id, dados) {

    return await prisma.usuarios.update({

        where: {
            usuario_id: Number(id),
        },
        data: dados
    })

}

module.exports = {
    buscarUsuarios,
    criarUsuario,
    editarUsuario
}