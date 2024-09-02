export class Venda {
    public constructor(
        private idVenda: number,
        private idNotaFiscal: number,
        private idProduto: number,
        private quantidade: number,
        private valorTotal: number
    ) {}
 
    public getIdNotaFiscal(): number { return this.idNotaFiscal;         }
    public setIdNotaFiscal(idNotaFiscal: number): void { this.idNotaFiscal = idNotaFiscal; }
    public getIdProduto(): number { return this.idProduto; }
    public setIdProduto(idProduto: number): void { this.idProduto = idProduto; }
    public getQuantidade(): number { return this.quantidade; }
    public setQuantidade(quantidade: number): void { this.quantidade = quantidade; }
    public getValorTotal(): number { return this.valorTotal; }
    public setValorTotal(valorTotal: number): void { this.valorTotal = valorTotal }

    public clone(): Venda {
        return new Venda(
            this.idVenda,
            this.idNotaFiscal,
            this.idProduto,
            this.quantidade,
            this.valorTotal,
        );
    }
};