export class Produto {
    private idProduto: number;
    private nome: string;
    private categoria: string;
    private custoCompra: number;
    private valorVenda: number;
    private quantidade: number;
    private idFornecedor: number;

    constructor(
        idProduto: number,
        nome: string,
        categoria: string,
        custoCompra: number,
        valorVenda: number,
        quantidade: number,
        idFornecedor: number
    ) {
        this.idProduto = idProduto;
        this.nome = nome;
        this.categoria = categoria;
        this.custoCompra = custoCompra; 
        this.valorVenda = valorVenda;
        this.quantidade = quantidade;
        this.idFornecedor = idFornecedor;
    }
    public getId(): number {
        return this.idProduto;       
    }
    
    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCategoria(): string {
        return this.categoria;
    }
    public setCategoria(categoria: string): void {
        this.categoria = categoria;
    }
    
    
    public getCustoCompra(): number {
        return this.custoCompra;
    }
    public setCustoCompra(custoCompra: number): void {
        this.custoCompra = custoCompra;
    }
    
    public getValorVenda(): number {
        return this.valorVenda;
    }
    public setValorVenda(valorVenda: number): void {
        this.valorVenda = valorVenda;
    }
    
    public getQuantidade(): number {
        return this.quantidade;
    }
    public setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }
    
    public getIdFornecedor(): number {
        return this.idFornecedor;
    }
    public setIdFornecedor(idFornecedor: number): void {
        this.idFornecedor = idFornecedor;
    }
    public clone(): Produto {
        return new Produto(
            this.idProduto,
            this.nome,
            this.categoria,
            this.custoCompra,
            this.valorVenda,
            this.quantidade,
            this.idFornecedor,
        );
    }
}