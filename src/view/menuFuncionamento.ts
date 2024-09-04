import { Mercado } from "../controllers/Mercado"
import { Produto } from "../model/Produto"

let ask = require("readline-sync")

function exibirCompras(compras: Produto[]) {
    console.log('Suas compras:')
    let total = 0
    for (let i = 0; i < compras.length; i++) {
        
        console.log(compras[i].getEstoque() + 'x', compras[i].getNome() + ' R$ ' + compras[i].getValorTotalVenda())
        total += compras[i].getValorTotalVenda()
    } 
    if (total === 0) {
        console.log(" Nenhum produto adicionado as suas compras.")
    }
    console.log('\nTotal da compra: R$' + total.toFixed(2))
}
export function menuFuncionamento(mercado: Mercado): Mercado {
    let menuFuncionamentoLoop = true
    let backupQuantidades : number[] = []

    for (let i = 0; i < mercado.produtos.length; i++) {
        backupQuantidades.push(mercado.produtos[i].getEstoque())
    }
    let compras : Produto[] = [];
    while (menuFuncionamentoLoop) {
        console.log(`
      -----------------------------
      ------- FUNCIONAMENTO -------
      -----------------------------
      - 1. COMPRAR                -
      - 2. IR PARA O CAIXA        -
      - 3. VOLTAR                 -
      -----------------------------\n`)
        exibirCompras(compras)
        let userOptionMenuFuncionamento = ask.questionInt("Qual desejas? \nR: ")

        console.clear()

        switch (userOptionMenuFuncionamento) {
            case 1:
                console.clear()
                let comprando = true
                while(comprando) {
                    exibirCompras(compras)
                    mercado.listarProdutos()
                   
                    
                    let indice = ask.questionInt('Qual o id do produto?\nR: ')
                    let quantidade = ask.questionInt('Quantos produtos deseja comprar?\nR: ')

                    if(mercado.verificarEstoque(indice, quantidade)) {
                        compras.push(mercado.comprarProduto(indice, quantidade))
                    }

                    const resposta = ask.questionInt("Deseja continuar comprando?\n 1.SIM\n 2.NAO \nR: ")

                    switch (resposta) {
                        case 1: 
                            break
                        default:
                            comprando = false
                            break
                    }
                    console.clear()
                }
                
                break

            case 2:
                if (compras.length === 0) {
                    console.log("Compre pelo menos 1 produto para ir ao caixa")
                    ask.question("Clique para sair...\n")
                    console.clear()
                    break
                }
                console.clear()
                exibirCompras(compras)
                ask.question("Clique para finalizar compra...\n")
                console.clear()

                const resposta = ask.questionInt("Deseja adicionar o CPF e o NOME na nota?\n 1.SIM\n 2.NAO \nR: ")
                let cpf = ''
                let nome = ''
                switch (resposta) {
                    case 1: 
                        cpf = ask.question("Qual o CPF do cliente? ")
                        nome = ask.question("Qual o nome do cliente? ")
                        break
                    default:
                        break
                }
                console.clear()
                ask.question("Compra realizada com sucesso");

                mercado.adicionarVenda(compras)
                console.log("Sua Nota Fiscal:\n")
                console.log(mercado.vendas[mercado.vendas.length - 1].emitirNotaFiscal(nome, cpf))
                //Funcionamento: IR PRO CAIXA
                ask.question("Clique para sair...\n")
                compras = []
                console.clear()
                break

            case 3:
                if (compras.length === 0) {
                    
                    console.clear()
                } else {
                    console.log()
                    for (let i = 0; i < mercado.produtos.length; i++) {
                        mercado.produtos[i].setEstoque(backupQuantidades[i])
                    }
                    //ask.question("Finaliza a compra antes de voltar... Clique para continuar...\n")
                }
                menuFuncionamentoLoop = false
                break

            default:
                console.clear()
                console.log("OPCAO INVALIDA...")
                break
        }
    }
    return mercado;
}