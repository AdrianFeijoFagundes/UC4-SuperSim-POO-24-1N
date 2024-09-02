let ask = require("readline-sync")

import { Mercado } from "../controllers/Mercado"
import { gestaoFornecedores } from "./gestaoFornecedores"
import { gestaoFuncionarios } from "./gestaoFuncionarios"
import { gestaoProdutos } from "./gestaoProdutos"
import { menuRelatorios } from "./menuRelatorios"

export function menuGestao(mercado: Mercado): Mercado {
    let menuGestaoLoop = true

    while (menuGestaoLoop) {
        console.clear()
            console.log(`\
            -----------------------------
            ---------- GESTAO -----------
            -----------------------------
            - 1. PRODUTOS               -
            - 2. FUNCIONARIOS           -
            - 3. FORNECEDORES           -
            - 4. GERAR RELATORIOS       -
            - 5. VOLTAR                 -
            -----------------------------
            `)
        let userOptionMenuGestao = ask.questionInt("Qual desejas? \nR: ")

        switch (userOptionMenuGestao) {

            case 1:
                console.clear()
                gestaoProdutos(mercado)
                break

            case 2:
                console.clear()
                //Substituir pelas outras functions de menu GESTAO FUNCIONARIO
                gestaoFuncionarios(mercado)
                break

            case 3:
                console.clear()
                //Substituir pelas outras functions de menu GESTAO FORNECEDORES
                gestaoFornecedores(mercado)
                break

            case 4:
                console.clear()
                //Substituir pelas outras functions de menu RELATORIOS
                menuRelatorios(mercado)
                break

            case 5:
                console.clear()
                //menu off
                menuGestaoLoop = false
                break

            default:
                console.log("OPCAO INVALIDA...")
                break
        }
    }
    return mercado;
}

