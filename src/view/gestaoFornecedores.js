"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gestaoFornecedores = gestaoFornecedores;
var ask = require("readline-sync");
function gestaoFornecedores(mercado) {
    var gestaoFornecedoresLoop = true;
    while (gestaoFornecedoresLoop) {
        console.clear();
        console.log("                -----------------------------\n                -- GESTAO DE FORNECEDORES ---\n                -----------------------------\n                - 1. ADICIONAR FORNECEDOR   -\n                - 2. LISTAR FORNECEDORES    -\n                - 3. ATUALIZAR FORNECEDOR   -\n                - 4. EXCLUIR                -\n                - 5. FAZER PEDIDO           -\n                - 6. VOLTAR                 -\n                -----------------------------\n                ");
        var userOptionGestaoFuncionario = ask.questionInt("Qual desejas? \nR: ");
        switch (userOptionGestaoFuncionario) {
            case 1:
                console.clear();
                var cnpj = ask.question("Qual o CNPJ da empresa?\nR: ");
                var nomeDaEmpresa = ask.question("Qual o nome da empresa?\nR: ");
                //Function que cria um fornecedor
                mercado.adicionarFornecedor(cnpj, nomeDaEmpresa);
                ask.question("Clique para sair...\n");
                break;
            case 2:
                console.clear();
                //Function para listar fornecedores
                mercado.listarFornecedores();
                ask.question("Clique para sair...\n");
                break;
            case 3:
                console.clear();
                mercado.listarFornecedores();
                var indice = ask.questionInt("Qual o id do fornecedor?\n R: ");
                cnpj = ask.question("Qual o novo CNPJ da empresa?\nR: ");
                nomeDaEmpresa = ask.question("Qual o novo nome da empresa?\nR: ");
                //Metodo set do funcionario se baseando no id do mesmo
                mercado.atualizarFornecedor(indice, cnpj, nomeDaEmpresa);
                break;
            case 4:
                console.clear();
                //Function para excluir se baseando no id do mesmo
                mercado.listarFornecedores();
                cnpj = ask.question("Qual o novo CNPJ do fornecedor que vai ser removido?\nR: ");
                mercado.removerFornecedor(cnpj);
                break;
            case 5:
                var produtosPedido = [];
                mercado.listarProdutos();
                indice = ask.questionInt('Qual o id do produto?\nR: ');
                var quantidade = ask.questionInt('Quantos produtos deseja pedir ao fornecedor?\nR: ');
                var produtoEscolhido = mercado.produtos[indice].clone();
                produtoEscolhido.setEstoque(quantidade);
                produtosPedido.push(produtoEscolhido);
                //Function para realizar pedido
                mercado.adicionarPedidoFornecedor(produtoEscolhido.getFornecedor().clone(), produtosPedido);
                console.log("Pedido Realizado com sucesso");
                break;
            case 6:
                console.clear();
                //menu off
                gestaoFornecedoresLoop = false;
                break;
            default:
                console.log("OPCAO INVALIDA...");
                break;
        }
    }
    return mercado;
}
