import { Mercado } from "../controllers/Mercado"

let ask = require("readline-sync")

export function menuRelatorios(mercado: Mercado): Mercado {
    
    let menuRelatorioLoop = true

    while(menuRelatorioLoop) {
        console.clear()
                console.log(`\
                -----------------------------
                -------- RELATORIOS ---------
                -----------------------------
                - 1. VENDAS                 -
                - 2. ESTOQUE                -
                - 3. PEDIDOS                -
                - 4. VOLTAR                 -
                -----------------------------
                `)
        let userOptionMenuRelatorios = ask.questionInt("Qual desejas? \nR: ")

        switch (userOptionMenuRelatorios) {

            case 1:
                console.clear()
                //Function relatorio VENDAS
                console.clear()
                mercado.relatorioVendas()
                ask.question("Clique para sair...\n")

                break

            case 2:
                console.clear()
                //Function relatorio ESTOQUE
                console.clear()
                mercado.listarProdutos()
                ask.question("Clique para sair...\n")
                break

            case 3:
                console.clear()

                console.clear()
                mercado.relatorioPedidos()
                ask.question("Clique para sair...\n")
                //Function relatorio PEDIDOS
                break

            case 4:
                console.clear()
                //menu off
                menuRelatorioLoop = false
                break

            default:
                console.log("OPCAO INVALIDA...")
                break
        }
    }
    return mercado;
}