"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mercado_1 = require("./controllers/Mercado");
var m = new Mercado_1.Mercado();
m.adicionarFornecedor('20880854000117', 'Fornecedor 1');
m.adicionarProduto('produto 1', 'marca 1', 'seção 1', 10, 20, 100, m.fornecedores[0]);
console.log(m.produtos);
