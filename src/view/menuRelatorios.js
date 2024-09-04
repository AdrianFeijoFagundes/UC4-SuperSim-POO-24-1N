"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuRelatorios = menuRelatorios;
var ask = require("readline-sync");
function menuRelatorios(mercado) {
    var menuRelatorioLoop = true;
    while (menuRelatorioLoop) {
        console.clear();
        console.log("                -----------------------------\n                -------- RELATORIOS ---------\n                -----------------------------\n                - 1. VENDAS                 -\n                - 2. ESTOQUE                -\n                - 3. PEDIDOS                -\n                - 4. VOLTAR                 -\n                -----------------------------\n                ");
        var userOptionMenuRelatorios = ask.questionInt("Qual desejas? \nR: ");
        switch (userOptionMenuRelatorios) {
            case 1:
                console.clear();
                //Function relatorio VENDAS
                console.clear();
                mercado.relatorioVendas();
                ask.question("Clique para sair...\n");
                break;
            case 2:
                console.clear();
                //Function relatorio ESTOQUE
                console.clear();
                mercado.listarProdutos();
                ask.question("Clique para sair...\n");
                break;
            case 3:
                console.clear();
                console.clear();
                mercado.relatorioPedidos();
                ask.question("Clique para sair...\n");
                //Function relatorio PEDIDOS
                break;
            case 4:
                console.clear();
                //menu off
                menuRelatorioLoop = false;
                break;
            default:
                console.log("OPCAO INVALIDA...");
                break;
        }
    }
    return mercado;
}
