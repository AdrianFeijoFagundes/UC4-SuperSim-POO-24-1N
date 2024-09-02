import { Mercado } from "../controllers/Mercado"

let ask = require("readline-sync")

export function menuFuncionamento(mercado: Mercado): Mercado {
    let menuFuncionamentoLoop = true

    while (menuFuncionamentoLoop) {

        console.log(`
      -----------------------------
      ------- FUNCIONAMENTO -------
      -----------------------------
      - 1. COMPRAR                -
      - 2. IR PARA O CAIXA        -
      - 3. VOLTAR                 -
      -----------------------------`)




        let userOptionMenuFuncionamento = ask.questionInt("Qual desejas? \nR: ")


        switch (userOptionMenuFuncionamento) {
            case 1:
                console.clear()
                //Substituir pela function de listar categorias de produtos
                console.log("Funcionamento 1")
                break

            case 2:
                console.clear()
                //Funcionamento: IR PRO CAIXA
                console.log("Funcionamento 2")
                break

            case 3:
                console.clear()
                //menu off
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