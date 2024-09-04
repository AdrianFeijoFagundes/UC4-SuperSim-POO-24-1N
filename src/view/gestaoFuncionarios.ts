import { Mercado } from "../controllers/Mercado"

let ask = require("readline-sync")

export function gestaoFuncionarios(mercado: Mercado): Mercado {
    let gestaoFuncionarioLoop = true

    while (gestaoFuncionarioLoop) {
        console.clear()
                console.log(`\
                -----------------------------
                --- GESTAO DE FUNCIONARIO ---
                -----------------------------
                - 1. ADMISSAO               -
                - 2. LISTAR FUNCIONARIOS    -
                - 3. ATUALIZAR DADOS FUNC.  -
                - 4. DEMITIR                -
                - 5. VOLTAR                 -
                -----------------------------
                `)
        let userOptionGestaoFuncionario = ask.questionInt("Qual desejas? \nR: ")

        switch (userOptionGestaoFuncionario) {

            case 1:
                //Function que cria um funcionario
                let nome = ask.question('Qual o nome do funcionario?\n R: ')
                let cpf = ask.question('Qual o CPF do funcionario?\n R: ')
                console.log('Qual o cargo do Funcionário? ')
                Mercado.exibir(Mercado.cargos)
                let cargo = Mercado.cargos[ask.questionInt('R: ')]
                let dia =ask.question('Qual o dia da contratacao?\n R: ')
                let mes = ask.question('Qual o mes da contratacao?\n R: ')
                let ano = ask.question('Qual o ano da contratacao?\n R: ')
                let dataContratacao = new Date(ano, mes, dia)
                mercado.adicionarFuncionario(cpf, nome, dataContratacao, cargo)
                console.log("Criar Funcionario")
                break

            case 2:
                console.clear()
                mercado.listarFuncionarios()
                ask.question('\nClique para continuar')
                //Function para listar funcionarios
                break

            case 3:
                //Metodo set do funcionario se baseando no id do mesmo
                mercado.listarFuncionarios()
                let indice = ask.questionInt("Qual o id do funcionario?\n R: ")
                console.log('Qual o novo cargo do funcionario?')
                Mercado.exibir(Mercado.cargos)
                cargo = Mercado.cargos[ask.questionInt("R: ")]
                mercado.atualizarFuncionario(indice , cargo)
                console.log("METODO SET 3")
                break

            case 4:
                console.clear()
                //Function para excluir se baseando no id do mesmo
                console.log("Demitindo Funcionário")
                mercado.listarFuncionarios()
                cpf = ask.question('Qual o CPF do funcionário?\n R: ')
                mercado.removerFuncionario(cpf)
                console.log("EXCLUIR FUNCIONARIO")
                break

            case 5:
                console.clear()
                //menu off
                gestaoFuncionarioLoop = false
                break

            default:
                console.log("OPCAO INVALIDA...")
                break
        }
    }
    return mercado;
}