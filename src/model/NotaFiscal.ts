export class NotaFiscal {
    private idNotaFiscal: number
    private valorTotal: number
    private metodoPagamento: string
    private cpfCliente: string

    constructor(
        idNotaFiscal: number,
        valorTotal: number,
        metodoPagamento: string,
        cpfCliente: string,
    ) {
        this.idNotaFiscal = idNotaFiscal;
        this.valorTotal = valorTotal;
        this.metodoPagamento = metodoPagamento;
        this.cpfCliente = cpfCliente;
    }
}