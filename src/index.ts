import { Mercado } from "./controllers/Mercado"
import { menuMercado } from "./view/menuMercado"

let ask = require("readline-sync")

let mercado = new Mercado()

mercado.adicionarFornecedor('20880854000117','Fornecedor 1')
mercado.adicionarFornecedor('32692497000142','Fornecedor 2')
mercado.adicionarFornecedor('48955685000156','Fornecedor 3')
mercado.adicionarFornecedor('42907758000158','Fornecedor 4')
mercado.adicionarFornecedor('26169565000190','Fornecedor 5')
menuMercado(mercado);