import { marcas, secoes } from "./controllers/infos"
import { Mercado } from "./controllers/Mercado"
import { menuMercado } from "./view/menuMercado"

let ask = require("readline-sync")

let mercado = new Mercado()

mercado.adicionarFornecedor('20880854000117','Fornecedor 1')
mercado.adicionarFornecedor('32692497000142','Fornecedor 2')
mercado.adicionarFornecedor('48955685000156','Fornecedor 3')
mercado.adicionarFornecedor('42907758000158','Fornecedor 4')
mercado.adicionarFornecedor('26169565000190','Fornecedor 5')

mercado.adicionarProduto('Amaciante', marcas[2], secoes[1], 10, 20, 100, mercado.fornecedores[0])
mercado.adicionarProduto('Detergente', marcas[0], secoes[1], 10, 20, 100, mercado.fornecedores[1])
mercado.adicionarProduto('Refri', marcas[1], secoes[2], 10, 20, 100, mercado.fornecedores[2])
mercado.adicionarProduto('Cerveja', marcas[4], secoes[2], 10, 20, 100, mercado.fornecedores[3])
mercado.adicionarProduto('Salgadinho', marcas[3], secoes[1], 10, 20, 100, mercado.fornecedores[3])
mercado.adicionarProduto('Maças', marcas[5], secoes[1], 10, 20, 100, mercado.fornecedores[4])


menuMercado(mercado);