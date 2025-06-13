import { prisma } from "../services";

const { executarSQL, prisma } = require("../services");

async function buscarImoveis() {
  try {
    return await prisma.imoveis.findMany();
  } catch (error) {
    return {
      tipo: "erro",
      mensagem: error.message,
    };
  }
}

async function buscarUmImovel(id) {
  try {
    return await prisma.imoveis.findMany({
      where: {
        imoveis_id: Number(id),
      },
    });
  } catch (error) {
    return {
      tipo: "erro",
      mensagem: error.message,
    };
  }
}

const prisma = new PrismaClient();

async function criarImovel(dados) {
  return await prisma.produto.create({
    data: {
      imoveis_nome: dados.imoveis_nome,
      imoveis_preco: dados.imoveis_preco,
      imoveis_desconto: dados.imoveis_desconto,
      imoveis_imagem: dados.imoveis_imagem,
      marca_id: dados.marca_id,
      categoria_id: dados.categoria_id,
    },
  });
}

async function apagarImovel(id) {
  return await executarSQL(`DELETE FROM imoveis WHERE imovel_id = ${id};`);
}

module.exports = {
  buscarImoveis,
  buscarUmImovel,
  criarImovel,
  apagarImovel,
};