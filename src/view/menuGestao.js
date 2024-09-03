"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuGestao = menuGestao;
var ask = require("readline-sync");
var gestaoFornecedores_1 = require("./gestaoFornecedores");
var gestaoFuncionarios_1 = require("./gestaoFuncionarios");
var gestaoProdutos_1 = require("./gestaoProdutos");
var menuRelatorios_1 = require("./menuRelatorios");
function menuGestao(mercado) {
    var menuGestaoLoop = true;
    while (menuGestaoLoop) {
        console.clear();
        console.log("            -----------------------------\n            ---------- GESTAO -----------\n            -----------------------------\n            - 1. PRODUTOS               -\n            - 2. FUNCIONARIOS           -\n            - 3. FORNECEDORES           -\n            - 4. GERAR RELATORIOS       -\n            - 5. VOLTAR                 -\n            -----------------------------\n            ");
        var userOptionMenuGestao = ask.questionInt("Qual desejas? \nR: ");
        switch (userOptionMenuGestao) {
            case 1:
                console.clear();
                (0, gestaoProdutos_1.gestaoProdutos)(mercado);
                break;
            case 2:
                console.clear();
                //Substituir pelas outras functions de menu GESTAO FUNCIONARIO
                (0, gestaoFuncionarios_1.gestaoFuncionarios)(mercado);
                break;
            case 3:
                console.clear();
                //Substituir pelas outras functions de menu GESTAO FORNECEDORES
                (0, gestaoFornecedores_1.gestaoFornecedores)(mercado);
                break;
            case 4:
                console.clear();
                //Substituir pelas outras functions de menu RELATORIOS
                (0, menuRelatorios_1.menuRelatorios)(mercado);
                break;
            case 5:
                console.clear();
                //menu off
                menuGestaoLoop = false;
                break;
            default:
                console.log("OPCAO INVALIDA...");
                break;
        }
    }
    return mercado;
}
