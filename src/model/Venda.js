"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
var Venda = /** @class */ (function () {
    function Venda(produtos) {
        this.produtos = [];
        this.valorTotal = 0;
        if (produtos)
            this.setProdutos(produtos);
    }
    Venda.prototype.getQuantidade = function () { return this.produtos.length; };
    Venda.prototype.getValorTotal = function () { return this.valorTotal; };
    Venda.prototype.setProdutos = function (produtos) {
        var _this = this;
        try {
            this.produtos = [];
            this.valorTotal = 0;
            produtos.forEach(function (produto) {
                var clonado = produto.clone();
                _this.produtos.push(clonado);
                _this.valorTotal += clonado.getValorVenda();
            });
        }
        catch (error) {
            console.error("setProdutos(): ".concat(error));
        }
    };
    Venda.prototype.adicionarProduto = function (produto) {
        try {
            this.produtos.push(produto);
            this.valorTotal += produto.getValorVenda();
        }
        catch (error) {
            console.error("adicionarProduto(): ".concat(error));
        }
    };
    Venda.prototype.emitirNotaFiscal = function (nomeComprador, cpfComprador) {
        var dataString = new Date().toLocaleDateString('pt-BR');
        var numeroNota = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
        var notaFiscal = "---------- NOTA FISCAL ----------\n"
            + "N\u00FAmero: ".concat(numeroNota, "\n")
            + "Data: ".concat(dataString, "\n")
            + "---------------------------------\n";
        this.produtos.forEach(function (produto, index) {
            notaFiscal += "Produto ".concat(index + 1, ": ").concat(produto.getNome(), " - R$ ").concat(produto.getValorVenda().toFixed(2), "\n");
        });
        notaFiscal += "Pre\u00E7o final: ".concat(this.valorTotal, "\n");
        notaFiscal += "---------------------------------\n";
        notaFiscal += "Cliente: ".concat(nomeComprador, "\n");
        if (cpfComprador)
            notaFiscal += "CPF: ".concat(cpfComprador, "\n");
        notaFiscal += "---------------------------------\n";
        return notaFiscal;
    };
    Venda.prototype.toString = function () {
        return this.produtos.join(", ");
    };
    Venda.prototype.clone = function () {
        return new Venda(this.produtos);
    };
    return Venda;
}());
exports.Venda = Venda;
;
