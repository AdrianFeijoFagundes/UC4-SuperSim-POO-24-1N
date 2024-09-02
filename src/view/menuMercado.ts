let ask = require("readline-sync")

import { Mercado } from "../controllers/Mercado"
import { menuFuncionamento } from "./menuFuncionamento"
import { menuGestao } from "./menuGestao"


export function menuMercado(mercado: Mercado): void {
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
                menuGestao(mercado)       
                break

            case 2:
                console.clear()
                menuFuncionamento(mercado) 
                break

            default:
                console.log("OPCAO INVALIDA...")
                break
        }
    }
}