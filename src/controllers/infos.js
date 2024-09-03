"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marcas = exports.cargos = exports.secoes = void 0;
exports.exibir = exibir;
exports.secoes = ['Alimentos', 'Limpeza', 'Bebidas'];
exports.cargos = ['Caixa', 'Gerente', 'Estoquista'];
exports.marcas = ['Limpazil', 'Crola-coca', 'Omu', 'Dokitos', 'Kauser', 'Fazenda Triste'];
function exibir(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(i, array[i]);
    }
}
