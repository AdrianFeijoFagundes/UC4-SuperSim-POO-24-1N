"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuFuncionamento = menuFuncionamento;
var ask = require("readline-sync");
function menuFuncionamento(mercado) {
    var menuFuncionamentoLoop = true;
    while (menuFuncionamentoLoop) {
        console.log("\n      -----------------------------\n      ------- FUNCIONAMENTO -------\n      -----------------------------\n      - 1. COMPRAR                -\n      - 2. IR PARA O CAIXA        -\n      - 3. VOLTAR                 -\n      -----------------------------");
        var userOptionMenuFuncionamento = ask.questionInt("Qual desejas? \nR: ");
        switch (userOptionMenuFuncionamento) {
            case 1:
                console.clear();
                //Substituir pela function de listar categorias de produtos
                console.log("Funcionamento 1");
                break;
            case 2:
                console.clear();
                //Funcionamento: IR PRO CAIXA
                console.log("Funcionamento 2");
                break;
            case 3:
                console.clear();
                //menu off
                menuFuncionamentoLoop = false;
                break;
            default:
                console.clear();
                console.log("OPCAO INVALIDA...");
                break;
        }
    }
    return mercado;
}
