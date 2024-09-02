export class Fornecedor {
    private idFornecedor: number;
    private cnpj: string;
    private nomeEmpresa: string;

    constructor(
        idFornecedor: number,
        cnpj: string,
        nomeEmpresa: string
    ) {
        this.idFornecedor = idFornecedor;
        this.cnpj = cnpj;
        this.nomeEmpresa = nomeEmpresa;
    }

    public getId(): number {
        return this.idFornecedor;
    }
    public getCNPJ(): string {
        return this.cnpj;
    }
    public setCNPJ(cnpj: string) {
        this.cnpj = cnpj;
    }
    public getNomeEmpresa(): string {
        return this.nomeEmpresa;
    }
    public setNomeEmpresa(empresa: string) {
        this.nomeEmpresa = empresa;
    }
    public clone(): Fornecedor {
        return new Fornecedor(
            this.idFornecedor,
            this.cnpj,
            this.nomeEmpresa,
        );
    }
}