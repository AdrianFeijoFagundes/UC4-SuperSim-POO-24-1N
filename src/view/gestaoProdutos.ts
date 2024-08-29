export function gestaoProdutos() {

    let gestaoProdutosLoop = true




    while (gestaoProdutosLoop) {

        console.log(`

        -----------------------------

        ----- GESTAO DE PRODUTOS ----

        -----------------------------

        - 1. CRIAR PRODUTO       -

        - 2. LISTAR PRODUTOS

        - 3. ATUALIZAR DADOS DE PROD.     -

        - 4. EXCLUIR     -

        - 5. VOLTAR -

        -----------------------------

        `)




        let userOptionGestaoProdutos = 1




        switch (userOptionGestaoProdutos) {




            case 1:

                //Function que cria um produto

                console.log("Criar Produtos")

                break




            case 2:

                console.clear()

                //Function para listar produtos

                console.log("Listar Produtos 2")

                break




            case 3:

                //Metodo set do produto se baseando no id do mesmo

                console.log("METODO SET 3")

                break

                

            case 4:

                //Function para excluir se baseando no id do mesmo

                console.log("EXCLUIR PRODUTO")

                break




            case 5:

                console.clear()

                //menu off

                gestaoProdutosLoop = false

                break




            default:

                console.log("OPCAO INVALIDA...")

                break

        }

    }

}