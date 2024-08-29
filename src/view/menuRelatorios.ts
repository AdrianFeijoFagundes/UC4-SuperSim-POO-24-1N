export function menuRelatorios() {

    let menuRelatorioLoop = true

    

    while(menuRelatorioLoop) {

        console.log(`

        -----------------------------

        -------- RELATORIOS ---------

        -----------------------------

        - 1. VENDAS        -

        - 2. ESTOQUE     -

        - 3. PEDIDOS -

        - 4. VOLTAR -

        -----------------------------

        `)




        let userOptionMenuRelatorios = 1




        switch (userOptionMenuRelatorios) {




            case 1:

                console.clear()

                //Function relatorio VENDAS

                break




            case 2:

                console.clear()

                //Function relatorio ESTOQUE

                break




            case 3:

                console.clear()

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

}