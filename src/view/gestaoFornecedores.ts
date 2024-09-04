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
                console.clear()
                let cnpj =  ask.question("Qual o CNPJ da empresa?\nR: ")
                let nomeDaEmpresa = ask.question("Qual o nome da empresa?\nR: ")
                //Function que cria um fornecedor
                mercado.adicionarFornecedor(cnpj, nomeDaEmpresa)
                ask.question("Clique para sair...\n")
                break

            case 2:
                console.clear()
                //Function para listar fornecedores
                mercado.listarFornecedores()
                ask.question("Clique para sair...\n")
                break

            case 3:
                console.clear()
                mercado.listarFornecedores()
                let indice = ask.questionInt("Qual o id do fornecedor?\n R: ")
                cnpj =  ask.question("Qual o novo CNPJ da empresa?\nR: ")
                nomeDaEmpresa = ask.question("Qual o novo nome da empresa?\nR: ")
                //Metodo set do funcionario se baseando no id do mesmo
                mercado.atualizarFornecedor(indice, cnpj, nomeDaEmpresa)
                break

            case 4:
                console.clear()
                //Function para excluir se baseando no id do mesmo
                mercado.listarFornecedores()
                cnpj = ask.question("Qual o novo CNPJ do fornecedor que vai ser removido?\nR: ")
                mercado.removerFornecedor(cnpj)
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
