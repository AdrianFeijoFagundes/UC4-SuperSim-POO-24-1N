import { Produto    } from './Produto';

export class Venda {
	private produtos:   Produto[] = [];
	private valorTotal: number    = 0;

	public constructor(produtos: Produto[] | undefined | null) {
		if (produtos) this.setProdutos(produtos);
	}
    
	public getQuantidade(): number { return this.produtos.length; }
	public getValorTotal(): number { return this.valorTotal;      }

	public setProdutos(produtos: Produto[]): void {
		try {
			this.produtos   = [];
			this.valorTotal = 0;

			produtos.forEach(produto => {
				const clonado = produto.clone();
				this.produtos.push(clonado);
				this.valorTotal += clonado.getValorTotalVenda();
			});
		} catch (error) {
			console.error(`setProdutos(): ${error}`);
		}
	}
	
	public adicionarProduto(produto: Produto): void {
		try {
			this.produtos.push(produto);
			this.valorTotal += produto.getValorTotalVenda();
		} catch (error) {
			console.error(`adicionarProduto(): ${error}`);
		}
	}

	public emitirNotaFiscal(nomeComprador: string, cpfComprador: string | undefined | null): string {
		const dataString = new Date().toLocaleDateString('pt-BR');
		const numeroNota = Math.floor(Math.random() * 100000).toString().padStart(5, '0');

		let notaFiscal = `---------- NOTA FISCAL ----------\n`
				+ `Número: ${numeroNota}\n`
				+ `Data: ${dataString}\n`
				+ `---------------------------------\n`;

		this.produtos.forEach((produto, index) => {
			notaFiscal += `Produto ${index + 1}: ${produto.getEstoque()}x ${produto.getNome()} - R$ ${produto.getValorTotalVenda().toFixed(2)}\n`;
		});

		notaFiscal += `Preço final: ${this.valorTotal}\n`;
		notaFiscal += `---------------------------------\n`;
		notaFiscal += `Cliente: ${nomeComprador}\n`;

		if (cpfComprador)
			notaFiscal += `CPF: ${cpfComprador}\n`;

		notaFiscal += `---------------------------------\n`;
		return notaFiscal;
	}

	public toString(): string {
		return this.produtos.join(", ");
	}

	public clone(): Venda {
		return new Venda(this.produtos);
	}
};
