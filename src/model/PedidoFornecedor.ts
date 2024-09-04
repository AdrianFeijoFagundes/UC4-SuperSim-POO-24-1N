import { Fornecedor } from './Fornecedor';
import { Produto    } from './Produto';

export class PedidoFornecedor {
	private fornecedor: Fornecedor | undefined;
	private produtos: Map<Produto, number>;

	public constructor(produtos?: Produto[], fornecedor?: Fornecedor) {
		this.fornecedor = fornecedor;
		this.produtos = new Map();
		if (produtos)
			this.setProdutos(produtos);
	}

	public getFornecedor(): Fornecedor | undefined {
		return this.fornecedor;
	}

	public getProdutos(): Map<Produto, number> {
		return this.produtos;
	}

	public getQuantidade(produto: Produto): number {
		return this.produtos.get(produto) || 0;
	}
    
	public getQuantidadeTotal(): number {
		let quantidadeTotal = 0;
	        this.produtos.forEach(quantidade => quantidadeTotal += quantidade);
		return quantidadeTotal;
	}

	public getValorTotal(): number { 
		let valorTotal = 0;
		this.produtos.forEach((quantidade, produto) => {
			valorTotal += quantidade * produto.getValorCompra();
		});

		return valorTotal;
	}

	public setProdutos(produtos: Produto[]): void {
		try {
			this.produtos.clear();
			produtos.forEach(produto => this.adicionarProduto(produto));
		} catch (error) {
			console.error(`setProdutos(): ${error}`);
		}
	}

	public setProdutosPreMapeados(produtos: Map<Produto, number>) {
		this.produtos = new Map(produtos);
	}
	
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

	public realizarPedido(): void {
		this.produtos.forEach((quantidade, produto) => {
			produto.setEstoque(produto.getEstoque() + quantidade);
		});
	}

	public toString(): string {
		let string = '';
		let indice = 1;

		this.produtos.forEach((quantidade, produto) => {
			string += `Produto ${indice++}: ${quantidade}x ${produto.getNome()}`
			string += ` - R$ ${produto.getValorCompra() * quantidade}\n`;
		});

		string += `Preço final: ${this.getValorTotal()}\n`;
		return string;
	}

	public clone(): PedidoFornecedor {
		let pedidoFornecedor  = new PedidoFornecedor();
		pedidoFornecedor.setProdutosPreMapeados(this.produtos);
		
		return pedidoFornecedor;
	}
};
