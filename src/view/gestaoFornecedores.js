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
                //Function que cria um fornecedor
                mercado.adicionarFornecedor(ask.question("Qual o CNPJ da empresa?\nR: "), ask.question("Qual o nome da empresa?\nR: "));
                ask.question("Clique para sair...\n");
                break;
            case 2:
                console.clear();
                //Function para listar fornecedores
                mercado.listarFornecedores();
                ask.question("Clique para sair...\n");
                break;
            case 3:
                //Metodo set do funcionario se baseando no id do mesmo
                console.log("METODO SET 3");
                break;
            case 4:
                //Function para excluir se baseando no id do mesmo
                console.log("EXCLUIR Fornecedor");
                break;
            case 5:
                //Function para realizar pedido
                console.log("Fazer Pedido p/ Fornecedor");
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
