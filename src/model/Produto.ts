import { Fornecedor } from './Fornecedor'; 

export class Produto {
	public constructor(
		private nome:        string,
		private marca:       string,
		private secao:       string,
		private valorCompra: number,
		private valorVenda:  number,
		private estoque:     number,
		private fornecedor:  Fornecedor
	) {}
	
	public getNome():        string     { return this.nome;        }
	public getMarca():       string     { return this.marca;       }
	public getSecao():       string     { return this.secao;       }
	public getValorCompra(): number     { return this.valorCompra; }
	public getValorVenda():  number     { return this.valorVenda;  }
	public getEstoque():     number     { return this.estoque;     }
	public getFornecedor():  Fornecedor { return this.fornecedor;  }

	public setNome(nome: string):                 void { this.nome = nome;               }
	public setMarca(marca: string):               void { this.marca = marca;             }
	public setSecao(secao: string):               void { this.secao = secao;             }
	public setValorCompra(valorCompra: number):   void { this.valorCompra = valorCompra; }
	public setValorVenda(valorVenda: number):     void { this.valorVenda = valorVenda;   }
	public setEstoque(estoque: number):           void { this.estoque = estoque ;        }
	public setFornecedor(fornecedor: Fornecedor): void { this.fornecedor = fornecedor;   }

	public toString(): string {
		return `Produto ${this.marca} ${this.nome} - ${this.secao}\n`
		     + `Valor de venda: ${this.valorVenda}\n`
		     + `Valor de compra: ${this.valorCompra}\n`
		     + `Estoque: ${this.estoque}\n`
		     + `Fornecedor: ${this.fornecedor.getNome()}`;
	}

	public clone(): Produto {
		return new Produto(this.nome, this.marca, this.secao, this.valorCompra, this.valorVenda, this.estoque, this.fornecedor.clone());
	}
};
