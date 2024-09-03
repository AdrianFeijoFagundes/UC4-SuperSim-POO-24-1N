import { Fornecedor } from './Fornecedor';
import { Produto    } from './Produto';

export class PedidoFornecedor {
	private produtos:   Produto[] = [];
	private valorTotal: number    = 0;

	public constructor(private fornecedor: Fornecedor, produtos: Produto[] | undefined | null) {
		if (produtos) this.setProdutos(produtos);
	}
    
	public getValorTotal(): number     { return this.valorTotal; }
	public getProdutos():   Produto[]  { return this.produtos;   }
	public getFornecedor(): Fornecedor { return this.fornecedor; }

	public setProdutos(produtos: Produto[]): void {
		try {
			this.produtos   = [];
			this.valorTotal = 0;

			produtos.forEach(produto => {
				const clonado = produto.clone();
				this.produtos.push(clonado);
				this.valorTotal += clonado.getValorVenda();
			});
		} catch (error) {
			console.error(`setProdutos(): ${error}`);
		}
	}

	public adicionarProduto(produto: Produto): void {
		try {
			this.produtos.push(produto);
			this.valorTotal += produto.getValorVenda();
		} catch (error) {
			console.error(`adicionarProduto(): ${error}`);
		}
	}

	public clone(): PedidoFornecedor {
		return new PedidoFornecedor(this.fornecedor.clone(), this.produtos);
	}
};
