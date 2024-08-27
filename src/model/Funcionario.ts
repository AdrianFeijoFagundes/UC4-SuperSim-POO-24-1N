export class Funcionario {
    private cpf: string;
    private nome: string;
    private nascimento: Date;
    private dataContratacao: Date;
    private cargo: string;

    constructor(cpf: string, nome: string, nascimento: Date, dataContratacao: Date, cargo: string) {
        this.cpf = cpf;
        this.nome = nome;
        this.nascimento = nascimento;
        this.dataContratacao = dataContratacao;
        this.cargo = cargo;
    }
}