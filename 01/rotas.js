const express = require("express")
const {listarEmpresa} = require("./controladores/empresas")
const rotas = express()

rotas.get("/empresas", listarEmpresa)

module.exports = rotas