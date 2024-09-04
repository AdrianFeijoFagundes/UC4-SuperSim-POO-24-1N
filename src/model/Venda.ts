import { Produto    } from './Produto';

export class Venda {
	private valorTotal: number = 0;
	private produtos:   Map<Produto, number>;

	public constructor(produtos?: Produto[] | undefined | null) {
		this.produtos = new Map();
		if (produtos)
			this.setProdutos(produtos);
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

	public getValorTotal(): number { return this.valorTotal; }

	public setProdutos(produtos: Produto[]): void {
		try {
			this.produtos.clear();
			this.valorTotal = 0;

			produtos.forEach(produto => this.adicionarProduto(produto));
		} catch (error) {
			console.error(`setProdutos(): ${error}`);
		}
	}

	public setProdutosPreMapeados(produtos: Map<Produto, number>) {
		this.produtos = new Map(produtos);

		this.produtos.forEach((quantidade, produto) => {
			this.valorTotal += produto.getValorVenda() * quantidade;
		});
	}
	
	public adicionarProduto(produto: Produto): void {
		try {
			const quantidade = this.getQuantidade(produto) + 1;

			this.valorTotal += produto.getValorVenda();
			this.produtos.set(produto, quantidade);
		} catch (error) {
			console.error(`adicionarProduto(): ${error}`);
		}
	}

	public realizarVenda(nomeComprador: string, cpfComprador: string | undefined | null): string {
		let produtosParaDestruir: Produto[] = [];

		this.produtos.forEach((quantidade, produto) => {
			if (produto.getEstoque() > quantidade) {
				produto.setEstoque(produto.getEstoque() - quantidade);
			} else {
				console.error(`O produto ${produto.getMarca()} ${produto.getNome()} não possui um estoque suficiente ${produto.getEstoque()}/${quantidade}, removendo ele da venda.`);
				produtosParaDestruir.push(produto);
			}
		});

		produtosParaDestruir.forEach(produto => this.produtos.delete(produto));
		return this.emitirNotaFiscal(nomeComprador, cpfComprador);
	}

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

	public toString(): string {
		let string = '';
		let indice = 1;

		this.produtos.forEach((quantidade, produto) => {
			string += `Produto ${indice++}: ${quantidade}x ${produto.getNome()}`
			string += ` - R$ ${produto.getValorVenda() * quantidade}\n`;
		});

		string += `Preço final: ${this.valorTotal}\n`;
		return string;
	}

	public clone(): Venda {
		let venda = new Venda();
		venda.setProdutosPreMapeados(this.produtos);
		
		return venda;
	}
};
