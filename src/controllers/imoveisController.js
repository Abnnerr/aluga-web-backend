
const { prisma } = require('../services')

async function buscarImovel(dados) {

  try {
    const filtros = {};

    if (dados.imovel_estado) {
      filtros.imovel_estado = dados.imovel_estado;
    }

    if (dados.imovel_bairro) {
      filtros.imovel_bairro = dados.imovel_bairro;
    }

    if (dados.imovel_modalidade) {
      filtros.imovel_modalidade = dados.imovel_modalidade;
    }

    if (dados.imovel_tipo) {
      filtros.imovel_tipo = dados.imovel_tipo;
    }

    if (dados.imovel_quarto) {
      filtros.imovel_quarto = dados.imovel_quarto;
    }

    if (dados.imovel_garagem) {
      filtros.imovel_garagem = dados.imovel_garagem;
    }


    
    if (dados.imovel_banheiro) {
      filtros.imovel_banheiro = dados.imovel_banheiro;
    }

    const resultado = await prisma.imoveis.findMany({
      where: filtros,
    });

    return resultado;
    
  } catch (error) {
    return {
      tipo: "erro",
      mensagem: error.message,
    };
  }
}

// async function criarImovel(dados) {
//   return await prisma.imoveis.create({
//     data: dados
//   })
// }

// async function buscarUmImovel(id) {
//     try {
//         return await prisma.produtos.findUnique({
//             where: { produtos_id: Number(id) }
//         });
//     } catch (error) {
//         return {
//             tipo: "erro",
//             mensagem: error.message
//         }
//     }
// }
// async function editarImovel(id, dados) {
//     // return await executarSQL(`UPDATE produtos SET produto_nome = '${dados.produto_nome}', produto_preco = ${dados.produto_preco}, produto_desconto = ${dados.produto_desconto}, produto_imagem = '${dados.produto_imagem}', marca_id = ${dados.marca_id}, categoria_id = ${dados.categoria_id} WHERE produtos_id = ${id};`);
//     try {
//         return await prisma.produtos.update( {
//             where: {produtos_id: Number(id)},
//             data: dados
//         })
//     } catch (error) {
//         return {
//             tipo: "erro",
//             mensagem: error.message
//         }
//     }
// }
// async function apagarImovel(id) {
//     try {
//         return await prisma.produtos.delete({
//             where: {
//                 produtos_id: Number(id)
//             }
//         })
//     } catch (error) {
//         return {
//             tipo: "erro",
//             mensagem: error.message
//         }
//     }
// }

module.exports = { buscarImovel, 
  // buscarUmImovel, criarImovel, editarImovel, apagarImovel 
}