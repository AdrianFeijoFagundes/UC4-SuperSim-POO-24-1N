/**
	* @module model
**/

/**
	* Representa um fornecedor no sistema.
*/
export class Fornecedor {
	/**
		* Cria uma instância de `Fornecedor`.
		* @param cnpj - O CNPJ do fornecedor.
		* @param nome - O nome da empresa fornecedora.
	*/
	public constructor(
		private cnpj: string,
		private nome: string
	) {}

	/**
		* Obtém o CNPJ do fornecedor.
		* @returns O CNPJ do fornecedor.
	*/
	public getCnpj(): string { return this.cnpj; }

	/**
		* Obtém o nome da empresa fornecedora.
		* @returns O nome da empresa fornecedora.
	*/
	public getNome(): string { return this.nome; }

	/**
		* Define o CNPJ do fornecedor.
		* @param cnpj - O novo CNPJ do fornecedor.
	*/
	public setCnpj(cnpj: string): void { this.cnpj = cnpj; }

	/**
		* Define o nome da empresa fornecedora.
		* @param nome - O novo nome da empresa fornecedora.
	*/
	public setNome(nome: string): void { this.nome = nome; }

	/**
		* Retorna uma representação em string do fornecedor.
		* Formato da representação retornada: CNPJ: <CNPJ> | Nome da empresa: <NOME>
		* @returns Uma string contendo o CNPJ e o nome da empresa.
	*/
	public toString(): string {
		return `CNPJ: ${this.cnpj} | Nome da empresa: ${this.nome}`
	}

	/**
		* Cria uma cópia do fornecedor atual. Usada para evitar referenciação ao objeto original.
		* @returns Uma nova instância de `Fornecedor` com os mesmos dados.
	*/
	public clone(): Fornecedor {
		return new Fornecedor(this.cnpj, this.nome);
	}
};
