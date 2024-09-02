import { Mercado } from "./controllers/Mercado"
import { menuMercado } from "./view/menuMercado"

let ask = require("readline-sync")

let mercado = new Mercado()

menuMercado(mercado);