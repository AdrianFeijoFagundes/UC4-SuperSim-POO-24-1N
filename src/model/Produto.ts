/**
	* @module model
**/

import { Fornecedor } from './Fornecedor'; 

/**
	* Representa um produto no sistema.
*/
export class Produto {
	/**
		* Cria uma instância de `Produto`.
		* @param nome - O nome do produto.
		* @param marca - A marca do produto.
		* @param secao - A seção onde o produto está localizado.
		* @param valorCompra - O valor de compra do produto.
		* @param valorVenda - O valor de venda do produto.
		* @param estoque - A quantidade em estoque do produto.
		* @param fornecedor - O fornecedor do produto.
	*/
	public constructor(
		private nome:        string,
		private marca:       string,
		private secao:       string,
		private valorCompra: number,
		private valorVenda:  number,
		private estoque:     number,
		private fornecedor:  Fornecedor
	) {}
	
	/**
		* Obtém o nome do produto.
		* @returns O nome do produto.
	*/
	public getNome():        string     { return this.nome;        }
	/**
		* Obtém a marca do produto.
		* @returns A marca do produto.
	*/
	public getMarca():       string     { return this.marca;       }
	/**
		* Obtém a seção onde o produto está localizado.
		* @returns A seção do produto.
	*/
	public getSecao():       string     { return this.secao;       }
	/**
		* Obtém o valor de compra do produto.
		* @returns O valor de compra do produto.
	*/
	public getValorCompra(): number     { return this.valorCompra; }
	/**
		* Obtém o valor de venda do produto.
		* @returns O valor de venda do produto.
	*/
	public getValorVenda():  number     { return this.valorVenda;  }
	/**
		* Obtém a quantidade em estoque do produto.
		* @returns A quantidade em estoque do produto.
	*/
	public getEstoque():     number     { return this.estoque;     }
	/**
		* Obtém o fornecedor do produto.
		* @returns O fornecedor do produto.
	*/
	public getFornecedor():  Fornecedor { return this.fornecedor;  }

	/**
		* Define o nome do produto.
		* @param nome - O novo nome do produto.
	*/
	public setNome(nome: string):                 void { this.nome = nome;               }
	/**
		* Define a marca do produto.
		* @param marca - A nova marca do produto.
	*/
	public setMarca(marca: string):               void { this.marca = marca;             }
	/**
		* Define a seção onde o produto está localizado.
		* @param secao - A nova seção do produto.
	*/
	public setSecao(secao: string):               void { this.secao = secao;             }
	/**
		* Define o valor de compra do produto.
		* @param valorCompra - O novo valor de compra do produto.
	*/
	public setValorCompra(valorCompra: number):   void { this.valorCompra = valorCompra; }

	/**
		* Define o valor de venda do produto.
		* @param valorVenda - O novo valor de venda do produto.
	*/
	public setValorVenda(valorVenda: number):     void { this.valorVenda = valorVenda;   }
	/**
		* Define a quantidade em estoque do produto.
		* @param estoque - A nova quantidade em estoque do produto.
	*/
	public setEstoque(estoque: number):           void { this.estoque = estoque ;        }
	/**
		* Define o fornecedor do produto.
		* @param fornecedor - O novo fornecedor do produto.
	*/
	public setFornecedor(fornecedor: Fornecedor): void { this.fornecedor = fornecedor;   }

	/**
		* Retorna uma representação em string do produto.
		* @returns Uma string contendo as informações do produto.
	*/
	public toString(): string {
		return `Produto ${this.marca} ${this.nome} - ${this.secao}\n`
		     + `Valor de venda: ${this.valorVenda}\n`
		     + `Valor de compra: ${this.valorCompra}\n`
		     + `Estoque: ${this.estoque}\n`
		     + `Fornecedor: ${this.fornecedor.getNome()}`;
	}

	/**
		* Cria uma cópia do produto atual.
		* @returns Uma nova instância de `Produto` com os mesmos dados e um clone do fornecedor.
	*/
	public clone(): Produto {
		return new Produto(this.nome, this.marca, this.secao, this.valorCompra, this.valorVenda, this.estoque, this.fornecedor.clone());
	}
};
