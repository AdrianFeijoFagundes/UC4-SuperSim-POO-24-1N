export class Funcionario {
    private idFuncionario: number;
    private cpf: string;
    private nome: string;
    private dataContratacao: string;
    private cargo: string;

    constructor(
        idFuncionario: number,
        cpf: string,
        nome: string,
        dataContratacao: string,
        cargo: string
    ) {
        this.idFuncionario = idFuncionario;
        this.cpf = cpf;
        this.nome = nome;
        this.dataContratacao = dataContratacao;
        this.cargo = cargo;
    }
}