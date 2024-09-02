export class Funcionario {
    public constructor(
        private idFuncionario: number,
        private cpf: string,
        private nome: string,
        private dataContratacao: string,
        private cargo: string
    ) {}

    public getId(): number { return this.idFuncionario; }
    public getCpf(): string { return this.cpf; }
    public setCpf(cpf: string): void { this.cpf = cpf; }
    public getNome(): string { return this.nome; }
    public setNome(nome: string): void { this.nome = nome; }
    public getDataContratacao(): string { return this.dataContratacao; }
    public setDataContratacao(data: string): void { this.dataContratacao = data; }
    
    public getCargo(): string { return this.cargo; }
    public setCargo(cargo: string): void { this.cargo = cargo; }

    public clone(): Funcionario {
        return new Funcionario(
            this.idFuncionario,
            this.cpf,
            this.nome,
            this.dataContratacao,
            this.cargo
        );
    }
};