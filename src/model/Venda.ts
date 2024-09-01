export class Venda {
    private idVenda: number;
    private idNotaFiscal: number;
    private idProduto: number;
    private quantidade: number;
    private valorTotal: number;

    constructor(
        idVenda: number,
        idNotaFiscal: number,
        idProduto: number,
        quantidade: number,
        valorTotal: number
    ) {
        this.idVenda = idVenda;
        this.idNotaFiscal = idNotaFiscal; 
        this.idProduto = idProduto;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }


}