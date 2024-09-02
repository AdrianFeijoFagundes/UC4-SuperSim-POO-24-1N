export class PedidoFornecedor {
    private idPedido: number;	
	private idNotaFiscal: number;
	private idFornecedor: number;	
	private idProduto: number; 
 	private dataDeEntrega: string;
    private quantidade: number;
    private valorTotal: number;

    constructor(
        idPedido: number,	
        idNotaFiscal: number,
        idFornecedor: number,	
        idProduto: number, 
        dataDeEntrega: string,
        quantidade: number,
        valorTotal: number

    ) {
        this.idPedido = idPedido;	
        this.idNotaFiscal = idNotaFiscal;
        this.idFornecedor = idFornecedor;	
        this.idProduto = idProduto; 
        this.dataDeEntrega = dataDeEntrega;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }

    public getIdNotaFiscal(): number {
        return this.idNotaFiscal;     
    }
    public setIdNotaFiscal(idNotaFiscal: number): void {
        this.idNotaFiscal = idNotaFiscal;
    }
    
    public getIdFornecedor(): number {
        return this.idFornecedor;
    }
    public setIdFornecedor(idFornecedor : number): void {
        this.idFornecedor = idFornecedor;
    }
    
    public getIdProduto(): number {
        return this.idProduto;
    }
    public setIdProduto(idProduto: number): void {
        this.idProduto = idProduto;
    }
    
    public getDataDeEntrega(): string {
        return this.dataDeEntrega;
    }
    public setDataDeEntrega(dataDeEntrega: string): void {
        this.dataDeEntrega = dataDeEntrega;
    }
    
    public getQuantidade(): number {
        return this.quantidade;
    }
    public setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }
    
    public getValorTotal(): number {
        return this.valorTotal;
    }
    public setValorTotal(valorTotal: number): void {
        this.valorTotal = valorTotal
    }
    public clone(): PedidoFornecedor {
        return new PedidoFornecedor(
            this.idPedido,
            this.idNotaFiscal,
            this.idFornecedor,
            this.idProduto,
            this.dataDeEntrega,
            this.quantidade,
            this.valorTotal,
        );
    }
}