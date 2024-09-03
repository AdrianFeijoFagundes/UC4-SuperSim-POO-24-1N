"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuMercado = menuMercado;
var ask = require("readline-sync");
var menuFuncionamento_1 = require("./menuFuncionamento");
var menuGestao_1 = require("./menuGestao");
function menuMercado(mercado) {
    while (true) {
        console.clear();
        console.log("                -----------------------------\n                ---------- MERCADO ----------\n                -----------------------------\n                - 1. GESTAO                 -\n                - 2. FUNCIONAMENTO          -\n                -----------------------------\n                ");
        var userOptionMenuMercado = ask.questionInt("Qual desejas? \nR: ");
        switch (userOptionMenuMercado) {
            case 1:
                console.clear();
                (0, menuGestao_1.menuGestao)(mercado);
                break;
            case 2:
                console.clear();
                (0, menuFuncionamento_1.menuFuncionamento)(mercado);
                break;
            default:
                console.log("OPCAO INVALIDA...");
                break;
        }
    }
}
