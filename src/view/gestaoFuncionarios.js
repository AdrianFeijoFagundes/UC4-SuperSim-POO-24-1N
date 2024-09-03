"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gestaoFuncionarios = gestaoFuncionarios;
var ask = require("readline-sync");
function gestaoFuncionarios(mercado) {
    var gestaoFuncionarioLoop = true;
    while (gestaoFuncionarioLoop) {
        console.clear();
        console.log("                -----------------------------\n                --- GESTAO DE FUNCIONARIO ---\n                -----------------------------\n                - 1. ADMISSAO               -\n                - 2. LISTAR FUNCIONARIOS    -\n                - 3. ATUALIZAR DADOS FUNC.  -\n                - 4. DEMITIR                -\n                - 5. VOLTAR                 -\n                -----------------------------\n                ");
        var userOptionGestaoFuncionario = ask.questionInt("Qual desejas? \nR: ");
        switch (userOptionGestaoFuncionario) {
            case 1:
                //Function que cria um funcionario
                console.log("Criar Funcionario");
                break;
            case 2:
                console.clear();
                //Function para listar funcionarios
                console.log("Listar Funcionario 2");
                break;
            case 3:
                //Metodo set do funcionario se baseando no id do mesmo
                console.log("METODO SET 3");
                break;
            case 4:
                //Function para excluir se baseando no id do mesmo
                console.log("EXCLUIR FUNCIONARIO");
                break;
            case 5:
                console.clear();
                //menu off
                gestaoFuncionarioLoop = false;
                break;
            default:
                console.log("OPCAO INVALIDA...");
                break;
        }
    }
    return mercado;
}
