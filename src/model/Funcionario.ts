export class Funcionario {
	public constructor(
		private cpf:             string,
		private nome:            string,
		private dataContratacao: Date,
		private cargo:           string
	) {}

	public getCpf():             string { return this.cpf;             }
	public getNome():            string { return this.nome;            }
	public getCargo():           string { return this.cargo;           }
	public getDataContratacao(): Date   { return this.dataContratacao; }

	public setCargo(cargo: string): void { this.cargo = cargo; }

	public clone(): Funcionario {
		return new Funcionario(this.cpf, this.nome, this.dataContratacao, this.cargo);
	}
};
