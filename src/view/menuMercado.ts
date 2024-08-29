import { menuFuncionamento } from "./menuFuncionamento"
import { menuGestao } from "./menuGestao"

function menuMercado() {
    console.log(`

    -----------------------------
    ---------- MERCADO ----------
    -----------------------------
    - 1. GESTAO                 -
    - 2. FUNCIONAMENTO          -
    -----------------------------
    `)

    let userOptionMenuMercado = 1

    switch (userOptionMenuMercado) {

        case 1:

            console.clear()

            menuFuncionamento()
            
            break
        case 2:

            console.clear()

            menuGestao()

            break
        default:

            console.log("OPCAO INVALIDA...")

            break
    }
}