export class Fornecedor {
    private idFornecedor: number;
    private cnpj: string;
    private nomeEmpresa: string;

    constructor(
        idFornecedor: number,
        cnpj: string,
        nomeEmpresa: string
    ) {
        this.idFornecedor = idFornecedor
        this.cnpj = cnpj;
        this.nomeEmpresa = nomeEmpresa
    }
}