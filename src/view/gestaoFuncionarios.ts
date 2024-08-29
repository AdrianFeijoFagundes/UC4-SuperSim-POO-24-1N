export function gestaoFuncionarios() {

    let gestaoFuncionarioLoop = true




    while (gestaoFuncionarioLoop) {

        console.log(`

        -----------------------------

        --- GESTAO DE FUNCIONARIO ---

        -----------------------------

        - 1. ADMISSAO       -

        - 2. LISTAR FUNCIONARIOS

        - 3. ATUALIZAR DADOS DE FUNC.     -

        - 4. DEMITIR     -

        - 5. VOLTAR -

        -----------------------------

        `)




        let userOptionGestaoFuncionario = 1




        switch (userOptionGestaoFuncionario) {




            case 1:

                //Function que cria um funcionario

                console.log("Criar Funcionario")

                break




            case 2:

                console.clear()

                //Function para listar funcionarios

                console.log("Listar Funcionario 2")

                break




            case 3:

                //Metodo set do funcionario se baseando no id do mesmo

                console.log("METODO SET 3")

                break

                

            case 4:

                //Function para excluir se baseando no id do mesmo

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

}