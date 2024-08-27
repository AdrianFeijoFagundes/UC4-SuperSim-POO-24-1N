export class Fornecedor {
    private cnpj: string;
    private nomeEmpresa: string;

    constructor(cnpj: string, nomeEmpresa: string) {
        this.cnpj = cnpj;
        this.nomeEmpresa = nomeEmpresa;
    }
}