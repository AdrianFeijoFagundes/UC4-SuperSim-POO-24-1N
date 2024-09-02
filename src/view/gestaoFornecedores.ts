import { Mercado } from "../controllers/Mercado"

let ask = require("readline-sync")

export function gestaoFornecedores(mercado: Mercado): Mercado {
    let gestaoFornecedoresLoop = true

    while (gestaoFornecedoresLoop) {
        console.clear()
                console.log(`\
                -----------------------------
                -- GESTAO DE FORNECEDORES ---
                -----------------------------
                - 1. ADICIONAR FORNECEDOR   -
                - 2. LISTAR FORNECEDORES    -
                - 3. ATUALIZAR FORNECEDOR   -
                - 4. EXCLUIR                -
                - 5. FAZER PEDIDO           -
                - 6. VOLTAR                 -
                -----------------------------
                `)
        let userOptionGestaoFuncionario = ask.questionInt("Qual desejas? \nR: ")

        switch (userOptionGestaoFuncionario) {

            case 1:
                //Function que cria um fornecedor
                console.log("Criar Forneceder")
                break

            case 2:
                console.clear()
                //Function para listar fornecedores
                console.log("Listar Fornecedores 2")
                break

            case 3:
                //Metodo set do funcionario se baseando no id do mesmo
                console.log("METODO SET 3")
                break

            case 4:
                //Function para excluir se baseando no id do mesmo
                console.log("EXCLUIR Fornecedor")
                break
            
            case 5:
                //Function para realizar pedido
                console.log("Fazer Pedido p/ Fornecedor")
                break

            case 6:
                console.clear()
                //menu off
                gestaoFornecedoresLoop = false
                break

            default:
                console.log("OPCAO INVALIDA...")
                break
        }
    }
    return mercado;
}
