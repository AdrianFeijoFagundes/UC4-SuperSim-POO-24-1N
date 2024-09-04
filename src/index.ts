
import { Mercado } from "./controllers/Mercado"
import { menuMercado } from "./view/menuMercado"

let ask = require("readline-sync")

let mercado = new Mercado()

mercado.adicionarFornecedor('20880854000117','Fornecedor 1')
mercado.adicionarFornecedor('32692497000142','Fornecedor 2')
mercado.adicionarFornecedor('48955685000156','Fornecedor 3')
mercado.adicionarFornecedor('42907758000158','Fornecedor 4')
mercado.adicionarFornecedor('26169565000190','Fornecedor 5')

mercado.adicionarProduto('Amaciante', '', Mercado.secoes[1], 10, 20, 100, mercado.fornecedores[0])
mercado.adicionarProduto('Detergente', '', Mercado.secoes[1], 10, 20, 100, mercado.fornecedores[1])
mercado.adicionarProduto('Refri', '', Mercado.secoes[2], 10, 20, 100, mercado.fornecedores[2])
mercado.adicionarProduto('Cerveja', '', Mercado.secoes[2], 10, 20, 100, mercado.fornecedores[3])
mercado.adicionarProduto('Salgadinho', '', Mercado.secoes[0], 10, 20, 100, mercado.fornecedores[3])
mercado.adicionarProduto('Maças', '', Mercado.secoes[0], 10, 20, 100, mercado.fornecedores[4])

mercado.adicionarFuncionario('04522681097','Adrian', new Date(2024, 9, 3), Mercado.cargos[0] )

menuMercado(mercado);