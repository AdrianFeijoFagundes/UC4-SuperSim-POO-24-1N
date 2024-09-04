"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gestaoFuncionarios = gestaoFuncionarios;
var Mercado_1 = require("../controllers/Mercado");
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
                var nome = ask.question('Qual o nome do funcionario?\n R: ');
                var cpf = ask.question('Qual o CPF do funcionario?\n R: ');
                console.log('Qual o cargo do Funcionário? ');
                Mercado_1.Mercado.exibir(Mercado_1.Mercado.cargos);
                var cargo = Mercado_1.Mercado.cargos[ask.questionInt('R: ')];
                var dia = ask.question('Qual o dia da contratacao?\n R: ');
                var mes = ask.question('Qual o mes da contratacao?\n R: ');
                var ano = ask.question('Qual o ano da contratacao?\n R: ');
                var dataContratacao = new Date(ano, mes, dia);
                mercado.adicionarFuncionario(cpf, nome, dataContratacao, cargo);
                console.log("Criar Funcionario");
                break;
            case 2:
                console.clear();
                mercado.listarFuncionarios();
                ask.question('\nClique para continuar');
                //Function para listar funcionarios
                break;
            case 3:
                //Metodo set do funcionario se baseando no id do mesmo
                mercado.listarFuncionarios();
                var indice = ask.questionInt("Qual o id do funcionario?\n R: ");
                console.log('Qual o novo cargo do funcionario?');
                Mercado_1.Mercado.exibir(Mercado_1.Mercado.cargos);
                cargo = Mercado_1.Mercado.cargos[ask.questionInt("R: ")];
                mercado.atualizarFuncionario(indice, cargo);
                console.log("METODO SET 3");
                break;
            case 4:
                console.clear();
                //Function para excluir se baseando no id do mesmo
                console.log("Demitindo Funcionário");
                cpf = ask.question('Qual o CPF do funcionário?\n R: ');
                mercado.removerFuncionario(cpf);
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
