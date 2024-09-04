import { Mercado } from "./controllers/Mercado";

let m = new Mercado()

m.adicionarFornecedor('20880854000117','Fornecedor 1')
m.adicionarProduto('produto 1', 'marca 1', 'seção 1', 10, 20, 100, m.fornecedores[0])


console.log(m.produtos)


const d = new Date()

console.log(d)