/**
	* @module model
**/

import { Produto    } from './Produto';

/**
	* Representa uma venda no sistema.
*/
export class Venda {
	private produtos:   Map<Produto, number>;

	/**
		* Cria uma instância de `Venda`.
		* @param produtos - Opcionalmente, uma lista de produtos a serem adicionados à venda.
	*/
	public constructor(produtos?: Produto[] | undefined | null) {
		this.produtos = new Map();
		if (produtos)
			this.setProdutos(produtos);
	}

	/**
		* Obtém o mapa de produtos e suas quantidades na venda.
		* @returns Um mapa onde as chaves são produtos e os valores são suas quantidades.
	*/
	public getProdutos(): Map<Produto, number> {
		return this.produtos;
	}
	/**
		* Obtém a quantidade de um produto específico na venda.
		* @param produto - O produto cuja quantidade será retornada.
		* @returns A quantidade do produto na venda ou `0` se o produto não estiver na venda.
	*/
	public getQuantidade(produto: Produto): number {
		return this.produtos.get(produto) || 0;
	}
	
	/**
		* Obtém a quantidade total de todos os produtos na venda.
		* @returns A quantidade total de produtos na venda.
	*/ 
	public getQuantidadeTotal(): number {
		let quantidadeTotal = 0;
	        this.produtos.forEach(quantidade => quantidadeTotal += quantidade);
		return quantidadeTotal;
	}

	/**
		* Obtém o valor total da venda com base nos produtos e suas quantidades.
		* @returns O valor total da venda.
	*/
	public getValorTotal(): number { 
		let valorTotal = 0;
		this.produtos.forEach((quantidade, produto) => {
			valorTotal += quantidade * produto.getValorVenda();
		});

		return valorTotal;
	}
	/**
		* Define os produtos na venda a partir de uma lista de produtos.
		* @param produtos - Uma lista de produtos a serem adicionados à venda.
	*/
	public setProdutos(produtos: Produto[]): void {
		try {
			this.produtos.clear();
			produtos.forEach(produto => this.adicionarProduto(produto));
		} catch (error) {
			console.error(`setProdutos(): ${error}`);
		}
	}

	/**
		* Define os produtos na venda a partir de um mapa pré-mapeado.
		* @param produtos - Um mapa de produtos e suas quantidades a serem adicionados à venda.
	*/
	public setProdutosPreMapeados(produtos: Map<Produto, number>) {
		this.produtos = new Map(produtos);
	}

	/**
		* Adiciona um produto à venda.
		* @param produto - O produto a ser adicionado à venda.
	*/
	public adicionarProduto(produto: Produto): void {
		try {
			const quantidade = this.getQuantidade(produto) + 1;
			this.produtos.set(produto, quantidade);
		} catch (error) {
			console.error(`adicionarProduto(): ${error}`);
		}
	}

	/**
		* Realiza a venda, atualizando o estoque dos produtos e removendo produtos com estoque insuficiente.
		* @param nomeComprador - O nome do comprador.
		* @param cpfComprador - O CPF do comprador, opcional.
		* @returns Uma string contendo a nota fiscal da venda.
	*/
	public realizarVenda(nomeComprador: string, cpfComprador: string | undefined | null): string {
		let produtosParaDestruir: Produto[] = [];

		this.produtos.forEach((quantidade, produto) => {
			if (produto.getEstoque() >= quantidade) {
				produto.setEstoque(produto.getEstoque() - quantidade);
			} else {
				console.error(`O produto ${produto.getMarca()} ${produto.getNome()} não possui um estoque suficiente ${produto.getEstoque()}/${quantidade}, removendo ele da venda.`);
				produtosParaDestruir.push(produto);
			}
		});

		produtosParaDestruir.forEach(produto => this.produtos.delete(produto));
		return this.emitirNotaFiscal(nomeComprador, cpfComprador);
	}

	/**
		* Emite uma nota fiscal da venda.
		* @param nomeComprador - O nome do comprador.
		* @param cpfComprador - O CPF do comprador, opcional.
		* @returns Uma string contendo a nota fiscal da venda.
	*/
	public emitirNotaFiscal(nomeComprador: string, cpfComprador: string | undefined | null): string {
		const dataString = new Date().toLocaleDateString('pt-BR');
		/* simulação de numeração da nota */
		const numeroNota = Math.floor(Math.random() * 100000).toString().padStart(5, '0');

		let indice = 1;
		let notaFiscal = `---------- NOTA FISCAL ----------\n`
				+ `Número: ${numeroNota}\n`
				+ `Data: ${dataString}\n`
				+ `---------------------------------\n`;

		notaFiscal += this.toString();
	
		notaFiscal += `---------------------------------\n`;
		notaFiscal += `Cliente: ${nomeComprador}\n`;

		if (cpfComprador)
			notaFiscal += `CPF: ${cpfComprador}\n`;

		notaFiscal += `---------------------------------\n`;
		return notaFiscal;
	}
	/**
		* Retorna uma representação em string da venda.
		* @returns Uma string contendo os detalhes dos produtos na venda e o preço final.
	*/
	public toString(): string {
		let string = '';
		let indice = 1;

		this.produtos.forEach((quantidade, produto) => {
			string += `${indice++}: ${quantidade}x ${produto.getNome()}`
			string += ` - R$ ${produto.getValorVenda() * quantidade}\n`;
		});

		string += `Preço final: ${this.getValorTotal()}\n`;
		return string;
	}
	/**
		* Cria uma cópia da venda atual.
		* @returns Uma nova instância de `Venda` com os mesmos produtos.
	*/
	public clone(): Venda {
		let venda = new Venda();
		venda.setProdutosPreMapeados(this.produtos);
		
		return venda;
	}
};
