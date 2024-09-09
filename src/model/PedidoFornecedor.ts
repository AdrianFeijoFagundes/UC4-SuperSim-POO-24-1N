/**
	* @module model
**/

import { Fornecedor } from './Fornecedor';
import { Produto    } from './Produto';

/**
	* Representa um pedido de fornecedor no sistema.
*/
export class PedidoFornecedor {
	private fornecedor: Fornecedor | undefined;
	private produtos: Map<Produto, number>;

	/**
		* Cria uma instância de `PedidoFornecedor`.
		* @param produtos - Opcionalmente, uma lista de produtos a serem adicionados ao pedido.
		* @param fornecedor - Opcionalmente, o fornecedor associado ao pedido.
	*/
	public constructor(produtos?: Produto[], fornecedor?: Fornecedor) {
		this.fornecedor = fornecedor;
		this.produtos = new Map();
		if (produtos)
			this.setProdutos(produtos);
	}
	/**
		* Obtém o fornecedor associado ao pedido.
		* @returns O fornecedor associado ao pedido ou `undefined` se não estiver definido.
	*/
	public getFornecedor(): Fornecedor | undefined {
		return this.fornecedor;
	}
	/**
		* Obtém o mapa de produtos e suas quantidades no pedido.
		* @returns Um mapa onde as chaves são produtos e os valores são suas quantidades.
	*/
	public getProdutos(): Map<Produto, number> {
		return this.produtos;
	}
	/**
		* Obtém a quantidade de um produto específico no pedido.
		* @param produto - O produto cuja quantidade será retornada.
		* @returns A quantidade do produto no pedido ou `0` se o produto não estiver no pedido.
	*/
	public getQuantidade(produto: Produto): number {
		return this.produtos.get(produto) || 0;
	}
	/**
		* Obtém a quantidade total de todos os produtos no pedido.
		* @returns A quantidade total de produtos no pedido.
	*/ 
	public getQuantidadeTotal(): number {
		let quantidadeTotal = 0;
	        this.produtos.forEach(quantidade => quantidadeTotal += quantidade);
		return quantidadeTotal;
	}

	/**
		* Obtém o valor total do pedido com base nos produtos e suas quantidades.
		* @returns O valor total do pedido.
	*/
	public getValorTotal(): number { 
		let valorTotal = 0;
		this.produtos.forEach((quantidade, produto) => {
			valorTotal += quantidade * produto.getValorCompra();
		});

		return valorTotal;
	}

	/**
		* Define os produtos no pedido a partir de uma lista de produtos.
		* @param produtos - Uma lista de produtos a serem adicionados ao pedido.
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
		* Define os produtos no pedido a partir de um mapa pré-mapeado.
		* @param produtos - Um mapa de produtos e suas quantidades a serem adicionados ao pedido.
	*/
	public setProdutosPreMapeados(produtos: Map<Produto, number>) {
		this.produtos = new Map(produtos);
	}

	/**
		* Adiciona um produto ao pedido.
		* @param produto - O produto a ser adicionado ao pedido.
		* @returns `true` se o produto foi adicionado com sucesso; caso contrário, `false`.
	*/
	public adicionarProduto(produto: Produto): boolean {
		if (this.fornecedor === undefined) this.fornecedor = produto.getFornecedor();
		if (produto.getFornecedor() !== this.fornecedor) {
			console.error(`O produto não é desse fornecedor.`);
			return false;
		}

		try {
			const quantidade = this.getQuantidade(produto) + 1;
			this.produtos.set(produto, quantidade);
			return true;
		} catch (error) {
			console.error(`adicionarProduto(): ${error}`);
			return false;
		}
	}

	/**
		* Realiza o pedido, atualizando o estoque dos produtos com base nas quantidades do pedido.
	*/
	public realizarPedido(): void {
		this.produtos.forEach((quantidade, produto) => {
			produto.setEstoque(produto.getEstoque() + quantidade);
		});
	}


	/**
		* Retorna uma representação em string do pedido.
		* @returns Uma string contendo os detalhes dos produtos no pedido e o preço final.
	*/
	public toString(): string {
		let string = '';
		let indice = 1;

		this.produtos.forEach((quantidade, produto) => {
			string += `${indice++}: ${quantidade}x ${produto.getNome()}`
			string += ` - R$ ${produto.getValorCompra() * quantidade}\n`;
		});

		string += `Preço final: ${this.getValorTotal()}\n`;
		return string;
	}

	/**
		* Cria uma cópia do pedido atual.
		* @returns Uma nova instância de `PedidoFornecedor` com os mesmos dados.
	*/
	public clone(): PedidoFornecedor {
		let pedidoFornecedor  = new PedidoFornecedor();
		pedidoFornecedor.setProdutosPreMapeados(this.produtos);
		
		return pedidoFornecedor;
	}
};
