"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoFornecedor = void 0;
var PedidoFornecedor = /** @class */ (function () {
    function PedidoFornecedor(fornecedor, produtos) {
        this.fornecedor = fornecedor;
        this.produtos = [];
        this.valorTotal = 0;
        if (produtos)
            this.setProdutos(produtos);
    }
    PedidoFornecedor.prototype.getValorTotal = function () { return this.valorTotal; };
    PedidoFornecedor.prototype.getProdutos = function () { return this.produtos; };
    PedidoFornecedor.prototype.getFornecedor = function () { return this.fornecedor; };
    PedidoFornecedor.prototype.setProdutos = function (produtos) {
        var _this = this;
        try {
            this.produtos = [];
            this.valorTotal = 0;
            produtos.forEach(function (produto) {
                var clonado = produto.clone();
                _this.produtos.push(clonado);
                _this.valorTotal += clonado.getValorTotalVenda();
            });
        }
        catch (error) {
            console.error("setProdutos(): ".concat(error));
        }
    };
    PedidoFornecedor.prototype.adicionarProduto = function (produto) {
        try {
            this.produtos.push(produto);
            this.valorTotal += produto.getValorTotalVenda();
        }
        catch (error) {
            console.error("adicionarProduto(): ".concat(error));
        }
    };
    PedidoFornecedor.prototype.clone = function () {
        return new PedidoFornecedor(this.fornecedor.clone(), this.produtos);
    };
    return PedidoFornecedor;
}());
exports.PedidoFornecedor = PedidoFornecedor;
;
