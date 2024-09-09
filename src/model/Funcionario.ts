/**
	* @module model
**/

/**
	* Representa um funcionário no sistema.
*/
export class Funcionario {
	/**
		* Cria uma instância de `Funcionario`.
		* @param cpf - O CPF do funcionário.
		* @param nome - O nome do funcionário.
		* @param dataContratacao - A data de contratação do funcionário.
		* @param cargo - O cargo do funcionário na empresa.
	*/
	public constructor(
		private cpf:             string,
		private nome:            string,
		private dataContratacao: Date,
		private cargo:           string
	) {}
	/**
		* Obtém o CPF do funcionário.
		* @returns O CPF do funcionário.
	*/
	public getCpf():             string { return this.cpf;             }

	/**
		* Obtém o nome do funcionário.
		* @returns O nome do funcionário.
	*/
	public getNome():            string { return this.nome;            }
	/**
		* Obtém o cargo do funcionário.
		* @returns O cargo do funcionário.
	*/
	public getCargo():           string { return this.cargo;           }
	/**
		* Obtém a data de contratação do funcionário.
		* @returns A data de contratação do funcionário.
	*/
	public getDataContratacao(): Date   { return this.dataContratacao; }
	/**
		* Define o cargo do funcionário.
		* @param cargo - O novo cargo do funcionário.
	*/
	public setCargo(cargo: string): void { this.cargo = cargo; }
	/**
		* Cria uma cópia do funcionário atual.
		* @returns Uma nova instância de `Funcionario` com os mesmos dados.
	*/
	public clone(): Funcionario {
		return new Funcionario(this.cpf, this.nome, this.dataContratacao, this.cargo);
	}
};
