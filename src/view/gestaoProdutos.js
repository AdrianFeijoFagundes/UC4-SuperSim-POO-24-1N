"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gestaoProdutos = gestaoProdutos;
var infos_1 = require("../controllers/infos");
var ask = require("readline-sync");
function gestaoProdutos(mercado) {
    var gestaoProdutosLoop = true;
    while (gestaoProdutosLoop) {
        console.clear();
        console.log("                -----------------------------\n                ----- GESTAO DE PRODUTOS ----\n                -----------------------------\n                - 1. CRIAR PRODUTO          -\n                - 2. LISTAR PRODUTOS        -\n                - 3. ATUALIZAR DADOS PROD.  -\n                - 4. EXCLUIR                -\n                - 5. VOLTAR                 -\n                -----------------------------\n                ");
        var userOptionGestaoProdutos = ask.questionInt("Qual desejas? \nR: ");
        switch (userOptionGestaoProdutos) {
            case 1:
                console.clear();
                console.log('Adicionando novo produto');
                var nome = ask.question('Qual o nome do produto?\n R: ');
                console.log('Qual a marca do produto');
                (0, infos_1.exibir)(infos_1.marcas);
                var marca = infos_1.marcas[ask.questionInt('R:  ')];
                console.log('Qual a seçao do produto?');
                (0, infos_1.exibir)(infos_1.secoes);
                var secao = infos_1.secoes[ask.questionInt('R:  ')];
                var valorCompra = ask.questionInt('Qual o valor de Compra do Produto?\n R:  ');
                var valorVenda = ask.questionInt('Qual o valor de Venda do Produto?\n R:  ');
                var estoque = ask.questionInt('Quantos produtos vao ser adicionados no estoque?\n R:  ');
                mercado.listarFornecedores();
                var indiceFornecedor = ask.questionInt('Qual o id do fornecedor do produto\n R:  ');
                var fornecedor = mercado.fornecedores[indiceFornecedor].clone();
                //Function que cria um produto
                mercado.adicionarProduto(nome, marca, secao, valorCompra, estoque, valorVenda, fornecedor);
                console.log("Criar Produtos");
                break;
            case 2:
                console.clear();
                //Function para listar produtos
                mercado.listarProdutos();
                ask.question('\nClique para continuar');
                break;
            case 3:
                //Metodo set do produto se baseando no id do mesmo
                mercado.listarProdutos();
                var indice = ask.questionInt('Qual o id do produto que vai ser atualizado?\n R: ');
                nome = ask.question('Qual o novo nome do produto?\n R: ');
                console.log('Qual a nova marca do produto');
                (0, infos_1.exibir)(infos_1.marcas);
                marca = infos_1.marcas[ask.questionInt('R:  ')];
                console.log('Qual a nova seçao do produto?');
                (0, infos_1.exibir)(infos_1.secoes);
                secao = infos_1.secoes[ask.questionInt('R:  ')];
                valorCompra = ask.questionInt('Qual o novo valor de Compra do Produto?\n R:  ');
                valorVenda = ask.questionInt('Qual o novo valor de Venda do Produto?\n R:  ');
                estoque = ask.questionInt('Quantos produtos estão no estoque?\n R:  ');
                mercado.listarFornecedores();
                indiceFornecedor = ask.questionInt('Qual o id do novo fornecedor do produto\n R:  ');
                fornecedor = mercado.fornecedores[indiceFornecedor].clone();
                mercado.atualizarProduto(indice, nome, marca, secao, valorCompra, valorVenda, estoque, fornecedor);
                break;
            case 4:
                //Function para excluir se baseando no id do mesmo
                console.log('Removendo produto');
                mercado.listarProdutos();
                nome = ask.question('Qual o nome do produto?\n R:');
                marca = ask.question('Qual a marca do produto?\n R:');
                mercado.removerProduto(nome, marca);
                break;
            case 5:
                console.clear();
                //menu off
                gestaoProdutosLoop = false;
                break;
            default:
                console.log("OPCAO INVALIDA...");
                break;
        }
    }
    return mercado;
}
