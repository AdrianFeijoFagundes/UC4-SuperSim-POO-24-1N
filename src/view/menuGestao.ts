import { gestaoFornecedores } from "./gestaoFornecedores"
import { gestaoFuncionarios } from "./gestaoFuncionarios"
import { gestaoProdutos } from "./gestaoProdutos"
import { menuRelatorios } from "./MenuRelatorios"

export function menuGestao() {

    let menuGestaoLoop = true




    while (menuGestaoLoop) {

        console.log(`
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


        let userOptionMenuGestao = 1

        switch (userOptionMenuGestao) {




            case 1:

                console.clear()

                gestaoProdutos()

                break
            case 2:

                console.clear()

                //Substituir pelas outras functions de menu GESTAO FUNCIONARIO

                gestaoFuncionarios()

                break
            case 3:

                console.clear()

                //Substituir pelas outras functions de menu GESTAO FORNECEDORES

                gestaoFornecedores()

                break
            case 4:

                console.clear()

                //Substituir pelas outras functions de menu RELATORIOS

                menuRelatorios()

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
}

