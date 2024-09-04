"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuFuncionamento = menuFuncionamento;
var ask = require("readline-sync");
function exibirCompras(compras) {
    console.log('Suas compras:');
    var total = 0;
    for (var i = 0; i < compras.length; i++) {
        console.log(compras[i].getEstoque() + 'x', compras[i].getNome() + ' R$ ' + compras[i].getValorTotalVenda());
        total += compras[i].getValorTotalVenda();
    }
    if (total === 0) {
        console.log(" Nenhum produto adicionado as suas compras.");
    }
    console.log('\nTotal da compra: R$' + total.toFixed(2));
}
function menuFuncionamento(mercado) {
    var menuFuncionamentoLoop = true;
    var compras = [];
    while (menuFuncionamentoLoop) {
        console.log("\n      -  obs: caso houver uma compra em andamento ela ser\u00E1 cancelada automaticamente ao sair desse menu. -");
        console.log("\n      -----------------------------\n      ------- FUNCIONAMENTO -------\n      -----------------------------\n      - 1. COMPRAR                -\n      - 2. IR PARA O CAIXA        -\n      - 3. VOLTAR                 -\n      -----------------------------\n");
        exibirCompras(compras);
        var userOptionMenuFuncionamento = ask.questionInt("Qual desejas? \nR: ");
        console.clear();
        switch (userOptionMenuFuncionamento) {
            case 1:
                console.clear();
                var comprando = true;
                while (comprando) {
                    exibirCompras(compras);
                    mercado.listarProdutos();
                    var indice = ask.questionInt('Qual o id do produto?\nR: ');
                    var quantidade = ask.questionInt('Quantos produtos deseja comprar?\nR: ');
                    if (mercado.verificarEstoque(indice, quantidade)) {
                        compras.push(mercado.comprarProduto(indice, quantidade));
                    }
                    var resposta_1 = ask.questionInt("Deseja continuar comprando?\n 1.SIM\n 2.NAO \nR: ");
                    switch (resposta_1) {
                        case 1:
                            break;
                        default:
                            comprando = false;
                            break;
                    }
                    console.clear();
                }
                break;
            case 2:
                if (compras.length === 0) {
                    console.log("Compre pelo menos 1 produto para ir ao caixa");
                    ask.question("Clique para sair...\n");
                    console.clear();
                    break;
                }
                console.clear();
                exibirCompras(compras);
                ask.question("Clique para finalizar compra...\n");
                console.clear();
                var resposta = ask.questionInt("Deseja adicionar o CPF e o NOME na nota?\n 1.SIM\n 2.NAO \nR: ");
                var cpf = '';
                var nome = '';
                switch (resposta) {
                    case 1:
                        cpf = ask.question("Qual o CPF do cliente? ");
                        nome = ask.question("Qual o nome do cliente? ");
                        break;
                    default:
                        break;
                }
                console.clear();
                ask.question("Compra realizada com sucesso");
                mercado.adicionarVenda(compras);
                console.log("Sua Nota Fiscal:\n");
                console.log(mercado.vendas[mercado.vendas.length - 1].emitirNotaFiscal(nome, cpf));
                //Funcionamento: IR PRO CAIXA
                ask.question("Clique para sair...\n");
                console.clear();
                break;
            case 3:
                compras = [];
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
