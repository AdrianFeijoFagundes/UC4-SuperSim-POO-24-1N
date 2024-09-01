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

    // Gestão de Produtos
    public listarProdutos(): void {}
    public adicionarProduto(): void {}
    public removerProduto(): void {}
    public atualizarProduto(): void {}
    // Gestão de Funcionários
    public listarFuncionarios(): void {}
    public adicionarFuncionario(): void {}
    public removerFuncionario(): void {}
    public atualizarFuncionario(): void {}

    // Gestão de Fornecedores
    public listarFornecedores(): void {}
    public adicionarFornecedor(): void {}
    public removerFornecedor(): void {}
    public atualizarFornecedor(): void {}
    
    public adicionarPedidoFornecedor(): void {}
    // Relatórios
    public relatorioVendas(): void {}
    public relatorioEstoque(): void {}
    public relatorioPedidos(): void {}


    // Vendas
    public adicionarVenda(): void {}
    public adicionarNotaFiscal(): void {}


}