import { Fornecedor } from "../model/Fornecedor"
import { Funcionario } from "../model/Funcionario"
import { NotaFiscal } from "../model/NotaFiscal"
import { PedidoFornecedor } from "../model/PedidoFornecedor"
import { Produto } from "../model/Produto"
import { Venda } from "../model/Venda"

export class Mercado {
    private fornecedores: Fornecedor[]
    private funcionarios: Funcionario[]
    private produtos: Produto[]
    private vendas: Venda[]
    private pedidosFornecedor: PedidoFornecedor[]
    private notasFiscais: NotaFiscal[]

    constructor() {
        this.fornecedores = []
        this.funcionarios = []
        this.produtos = []
        this.produtos = []
        this.vendas = []
        this.pedidosFornecedor = []
        this.notasFiscais = [] 
    }

    public adicionarFornecedor(): void {}
    public adicionarFuncionario(): void {}
    public adicionarProduto(): void {}
    public adicionarVenda(): void {}
    public adicionarPedidoFornecedor(): void {}
    public adicionarNotaFiscal(): void {}

    public removerFornecedor(): void {}
    public removerFuncionario(): void {}
    public removerProduto(): void {}

}