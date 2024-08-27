import { Fornecedor } from "./Fornecedor";

export class Produto {
    private id: string;
    private nome: string;
    private categoria: string;
    private custoCompra: number;
    private valorVenda: number;
    private quantidadeEstoque: number;
    private fornecedor: Fornecedor;

    constructor(id: string, nome: string, categoria: string, custoCompra: number, valorVenda: number, quantidadeEstoque: number, fornecedor: Fornecedor) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.custoCompra = custoCompra;
        this.valorVenda = valorVenda;
        this.quantidadeEstoque = quantidadeEstoque;
        this.fornecedor = fornecedor;
    }
}