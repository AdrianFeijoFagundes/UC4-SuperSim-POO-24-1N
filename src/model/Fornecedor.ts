export class Fornecedor {
	public constructor(
		private cnpj: string,
		private nome: string
	) {}

	public getCnpj(): string { return this.cnpj; }
	public getNome(): string { return this.nome; }

	public setCnpj(cnpj: string): void { this.cnpj = cnpj; }
	public setNome(nome: string): void { this.nome = nome; }

	public toString(): string {
		return `CNPJ: ${this.cnpj} | Nome da empresa: ${this.nome}`
	}

	public clone(): Fornecedor {
		return new Fornecedor(this.cnpj, this.nome);
	}
};
