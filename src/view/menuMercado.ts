let ask = require("readline-sync")

import { menuFuncionamento } from "./menuFuncionamento"
import { menuGestao } from "./menuGestao"


function menuMercado() {
    while(true) {
        console.clear()
                console.log(`\
                -----------------------------
                ---------- MERCADO ----------
                -----------------------------
                - 1. GESTAO                 -
                - 2. FUNCIONAMENTO          -
                -----------------------------
                `)
        let userOptionMenuMercado = ask.questionInt("Qual desejas? \nR: ")

        switch (userOptionMenuMercado) {
            
            case 1:
                console.clear()
                menuGestao()       
                break

            case 2:
                console.clear()
                menuFuncionamento() 
                break

            default:
                console.log("OPCAO INVALIDA...")
                break
        }
    }
}

menuMercado()