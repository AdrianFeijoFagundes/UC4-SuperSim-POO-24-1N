"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nome, marca, secao, valorCompra, valorVenda, estoque, fornecedor) {
        this.nome = nome;
        this.marca = marca;
        this.secao = secao;
        this.valorCompra = valorCompra;
        this.valorVenda = valorVenda;
        this.estoque = estoque;
        this.fornecedor = fornecedor;
    }
    Produto.prototype.getNome = function () { return this.nome; };
    Produto.prototype.getMarca = function () { return this.marca; };
    Produto.prototype.getSecao = function () { return this.secao; };
    Produto.prototype.getValorCompra = function () { return this.valorCompra; };
    Produto.prototype.getValorVenda = function () { return this.valorVenda; };
    Produto.prototype.getEstoque = function () { return this.estoque; };
    Produto.prototype.getFornecedor = function () { return this.fornecedor; };
    Produto.prototype.getValorTotalCompra = function () { return this.valorCompra * this.estoque; };
    Produto.prototype.getValorTotalVenda = function () { return this.valorVenda * this.estoque; };
    Produto.prototype.setNome = function (nome) { this.nome = nome; };
    Produto.prototype.setMarca = function (marca) { this.marca = marca; };
    Produto.prototype.setSecao = function (secao) { this.secao = secao; };
    Produto.prototype.setValorCompra = function (valorCompra) { this.valorCompra = valorCompra; };
    Produto.prototype.setValorVenda = function (valorVenda) { this.valorVenda = valorVenda; };
    Produto.prototype.setEstoque = function (estoque) { this.estoque = estoque; };
    Produto.prototype.setFornecedor = function (fornecedor) { this.fornecedor = fornecedor; };
    Produto.prototype.toString = function () {
        return "Produto ".concat(this.marca, " ").concat(this.nome, " - ").concat(this.secao, "\n")
            + "Valor de venda: ".concat(this.valorVenda, "\n")
            + "Valor de compra: ".concat(this.valorCompra, "\n")
            + "Estoque: ".concat(this.estoque, "\n")
            + "Fornecedor: ".concat(this.fornecedor.getNome());
    };
    Produto.prototype.clone = function () {
        return new Produto(this.nome, this.marca, this.secao, this.valorCompra, this.valorVenda, this.estoque, this.fornecedor.clone());
    };
    return Produto;
}());
exports.Produto = Produto;
;
