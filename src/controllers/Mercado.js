"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mercado = void 0;
var Fornecedor_1 = require("../model/Fornecedor");
var Funcionario_1 = require("../model/Funcionario");
var PedidoFornecedor_1 = require("../model/PedidoFornecedor");
var Produto_1 = require("../model/Produto");
var Venda_1 = require("../model/Venda");
var Mercado = /** @class */ (function () {
    function Mercado() {
        this.fornecedores = [];
        this.funcionarios = [];
        this.produtos = [];
        this.vendas = [];
        this.pedidosFornecedor = [];
    }
    Mercado.exibir = function (array) {
        for (var i = 0; i < array.length; i++) {
            console.log(i, array[i]);
        }
    };
    Mercado.indiceInvalido = function () {
        console.warn("Posi\u00E7\u00E3o selecionada fora dos limites.");
    };
    Mercado.listandoSemNada = function () {
        console.warn('Não há entrada do tipo desejado no sistema.');
    };
    Mercado.prototype.listarProdutos = function () {
        if (this.produtos.length === 0) {
            Mercado.listandoSemNada();
        }
        else {
            console.table(this.produtos);
        }
    };
    Mercado.prototype.adicionarProduto = function (nome, marca, secao, valorCompra, valorVenda, estoque, fornecedor) {
        try {
            this.produtos.push(new Produto_1.Produto(nome, marca, secao, valorCompra, valorVenda, estoque, fornecedor));
        }
        catch (error) {
            console.error("adicionarProduto(): ".concat(error));
        }
    };
    Mercado.prototype.removerProduto = function (nome, marca) {
        try {
            var indice = this.produtos.findIndex(function (produto) {
                return produto.getNome() === nome && produto.getMarca() === marca;
            });
            if (indice < 0) {
                console.warn("Produto com nome \"".concat(nome, "\" e marca \"").concat(marca, "\" n\u00E3o encontrado."));
                return;
            }
            this.produtos.splice(indice, 1);
        }
        catch (error) {
            console.error("removerProduto(): ".concat(error));
        }
    };
    Mercado.prototype.atualizarProduto = function (indice, nome, marca, secao, valorCompra, valorVenda, estoque, fornecedor) {
        if (indice < 0 || indice > this.produtos.length) {
            Mercado.indiceInvalido();
            return;
        }
        if (nome)
            this.produtos[indice].setNome(nome);
        if (marca)
            this.produtos[indice].setMarca(marca);
        if (secao)
            this.produtos[indice].setSecao(secao);
        if (valorCompra)
            this.produtos[indice].setValorCompra(valorCompra);
        if (valorVenda)
            this.produtos[indice].setValorVenda(valorVenda);
        if (estoque)
            this.produtos[indice].setEstoque(estoque);
        if (fornecedor)
            this.produtos[indice].setFornecedor(fornecedor);
    };
    Mercado.prototype.listarFuncionarios = function () {
        if (this.funcionarios.length === 0) {
            Mercado.listandoSemNada();
        }
        else {
            console.table(this.funcionarios);
        }
    };
    Mercado.prototype.adicionarFuncionario = function (cpf, nome, dataContratacao, cargo) {
        try {
            this.funcionarios.push(new Funcionario_1.Funcionario(cpf, nome, dataContratacao, cargo));
        }
        catch (error) {
            console.error("adicionarFuncionario(): ".concat(error));
        }
    };
    Mercado.prototype.removerFuncionario = function (cpf) {
        try {
            var indice = this.funcionarios.findIndex(function (funcionario) {
                return funcionario.getCpf() === cpf;
            });
            if (indice < 0) {
                console.warn("Funcion\u00E1rio com CPF \"".concat(cpf, "\" n\u00E3o encontrado."));
                return;
            }
            this.funcionarios.splice(indice, 1);
        }
        catch (error) {
            console.error("removerFuncionario(): ".concat(error));
        }
    };
    Mercado.prototype.atualizarFuncionario = function (indice, cargo) {
        if (indice < 0 || indice > this.funcionarios.length) {
            Mercado.indiceInvalido();
            return;
        }
        if (cargo)
            this.funcionarios[indice].setCargo(cargo);
    };
    Mercado.prototype.listarFornecedores = function () {
        if (this.fornecedores.length === 0) {
            Mercado.listandoSemNada();
        }
        else {
            console.table(this.fornecedores);
        }
    };
    Mercado.prototype.adicionarFornecedor = function (cnpj, nomeEmpresa) {
        try {
            this.fornecedores.push(new Fornecedor_1.Fornecedor(cnpj, nomeEmpresa));
        }
        catch (error) {
            console.error("adicionarFornecedor(): ".concat(error));
        }
    };
    Mercado.prototype.removerFornecedor = function (cnpj) {
        try {
            var indice = this.fornecedores.findIndex(function (fornecedor) {
                return fornecedor.getCnpj() === cnpj;
            });
            if (indice < 0) {
                console.warn("Fornecedor com CNPJ \"".concat(cnpj, "\" n\u00E3o encontrado."));
                return;
            }
            this.fornecedores.splice(indice, 1);
        }
        catch (error) {
            console.error("removerFornecedor(): ".concat(error));
        }
    };
    Mercado.prototype.atualizarFornecedor = function (indice, cnpj, nome) {
        if (indice < 0 || indice > this.fornecedores.length) {
            Mercado.indiceInvalido();
            return;
        }
        if (cnpj)
            this.fornecedores[indice].setCnpj(cnpj);
        if (nome)
            this.fornecedores[indice].setNome(nome);
    };
    Mercado.prototype.adicionarPedidoFornecedor = function (fornecedor, produtos) {
        try {
            this.pedidosFornecedor.push(new PedidoFornecedor_1.PedidoFornecedor(fornecedor, produtos));
        }
        catch (error) {
            console.log("adicionarPedidoFornecedor(): ".concat(error));
        }
    };
    Mercado.prototype.adicionarVenda = function (produtos) {
        try {
            this.vendas.push(new Venda_1.Venda(produtos));
        }
        catch (error) {
            console.log("adicionarVenda(): ".concat(error));
        }
    };
    Mercado.prototype.comprarProduto = function (indice, quantidade) {
        var produtoComprado = this.produtos[indice].clone();
        //Mudando a quantidade no estoque
        produtoComprado.setEstoque(quantidade);
        var novaQtdProdutos = this.produtos[indice].getEstoque() - produtoComprado.getEstoque();
        // nova quantidade do estoque
        this.produtos[indice].setEstoque(novaQtdProdutos);
        return produtoComprado;
    };
    Mercado.prototype.verificarEstoque = function (indice, quantidade) {
        if (indice > this.produtos.length + 1) {
            console.log("O produto não está cadastrado");
            return false;
        }
        if (this.produtos[indice].getEstoque() < quantidade) {
            console.log("Não é possivel comprar essa quantidade");
            return false;
        }
        else {
            return true;
        }
    };
    Mercado.prototype.relatorioVendas = function () {
    };
    Mercado.prototype.relatorioPedidos = function () { };
    Mercado.secoes = ['Alimentos', 'Limpeza', 'Bebidas'];
    Mercado.cargos = ['Gerente', 'Caixa', 'Estoquista'];
    return Mercado;
}());
exports.Mercado = Mercado;
;
