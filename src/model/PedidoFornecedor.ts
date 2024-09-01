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
}