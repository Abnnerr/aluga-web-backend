const { prisma } = require("../services");


async function favoritar(dados) {

    const favorito = await prisma.favorito.create({
        data: dados
    })
    return favorito
}

module.exports = {
    favoritar
}