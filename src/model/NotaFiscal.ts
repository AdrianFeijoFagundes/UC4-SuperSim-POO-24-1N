export class NotaFiscal {
    public constructor(
        private idNotaFiscal: number,
        private valorTotal: number,
        private metodoPagamento: string,
        private cpfCliente: string,
    ) {}

    public getId(): number { return this.idNotaFiscal; }
    public getValorTotal(): number { return this.valorTotal; }
    public setValorTotal(valorTotal: number): void { this.valorTotal = valorTotal; }
    public getMetodoPagamento(): string { return this.metodoPagamento; }
    public setMetodoPagamento(metodoPagamento: string): void { this.metodoPagamento = metodoPagamento; }
    public getCpfCliente(): string { return this.cpfCliente; }
    public setCpfCliente(cpf : string): void { this.cpfCliente = cpf; }

    public clone(): NotaFiscal {
        return new NotaFiscal(
            this.idNotaFiscal,
            this.valorTotal,
            this.metodoPagamento,
            this.cpfCliente
        );
    }
};