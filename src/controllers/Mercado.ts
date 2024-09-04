import * as ask from 'readline-sync';

import { Fornecedor       } from '../model/Fornecedor';
import { Funcionario      } from '../model/Funcionario';
import { PedidoFornecedor } from '../model/PedidoFornecedor';
import { Produto          } from '../model/Produto';
import { Venda            } from '../model/Venda';

export class Mercado {
	public fornecedores:      Fornecedor[]       = [];
	public funcionarios:      Funcionario[]      = [];
	public produtos:          Produto[]          = [];
	public vendas:            Venda[]            = [];
	public pedidosFornecedor: PedidoFornecedor[] = [];

	public static secoes: string[] = ['Alimentos', 'Limpeza', 'Bebidas']
	public static cargos: string[] = ['Gerente', 'Caixa', 'Estoquista']

	public constructor() {}

	public static exibir(array: string[]): void {
		for (let i = 0; i < array.length; i++) {
			console.log(i, array[i])
		}
	}
	private static indiceInvalido(): void {
		console.warn(`Posição selecionada fora dos limites.`);
	}

	private static listandoSemNada(): void {
		console.warn('Não há entrada do tipo desejado no sistema.');
	}

	public listarProdutos(): void {
		if (this.produtos.length === 0) {
			Mercado.listandoSemNada();
		} else {
			console.table(this.produtos);
		}
	}
 
	public adicionarProduto(
		nome:        string,
		marca:       string,
		secao:       string,
		valorCompra: number,
		valorVenda:  number,
		estoque:     number,
		fornecedor:  Fornecedor
	): void {
		try {
			this.produtos.push(new Produto(nome, marca, secao, valorCompra, valorVenda, estoque, fornecedor));
		} catch (error) {
			console.error(`adicionarProduto(): ${error}`);
		}
	}

	public removerProduto(nome: string, marca: string): void {
		try {
			const indice = this.produtos.findIndex(produto =>
				produto.getNome() === nome && produto.getMarca() === marca
			);

			if (indice < 0) {
		                console.warn(`Produto com nome "${nome}" e marca "${marca}" não encontrado.`);
				return;
			}
			
			this.produtos.splice(indice, 1);
		} catch (error) {
			console.error(`removerProduto(): ${error}`);
		}
	}

	public atualizarProduto(
		indice:      number,
		nome:        string     | undefined | null,
		marca:       string     | undefined | null,
		secao:       string     | undefined | null,
		valorCompra: number     | undefined | null,
		valorVenda:  number     | undefined | null,
		estoque:     number     | undefined | null,
		fornecedor:  Fornecedor | undefined | null
	): void {
		if (indice < 0 || indice > this.produtos.length) {
			Mercado.indiceInvalido();
			return; 
		}
		
		if (nome)
			this.produtos[indice].setNome(nome);
		if (marca)
			this.produtos[indice].setMarca(marca);
		if (secao)
			this.produtos[indice].setSecao(secao);
		if (valorCompra)
			this.produtos[indice].setValorCompra(valorCompra);
		if (valorVenda)
			this.produtos[indice].setValorVenda(valorVenda);
		if (estoque)
			this.produtos[indice].setEstoque(estoque);
		if (fornecedor)
			this.produtos[indice].setFornecedor(fornecedor);
	}
	
	public listarFuncionarios(): void {
		if (this.funcionarios.length === 0) {
			Mercado.listandoSemNada();
		} else {
			console.table(this.funcionarios);
		}
	}
    
	public adicionarFuncionario(cpf: string, nome: string, dataContratacao: Date, cargo: string): void {
		try {
			this.funcionarios.push(new Funcionario(cpf, nome, dataContratacao, cargo));
		} catch (error) {
			console.error(`adicionarFuncionario(): ${error}`);
		}
	}
    
	public removerFuncionario(cpf: string): void {
		try {
			const indice = this.funcionarios.findIndex(funcionario =>
				funcionario.getCpf() === cpf);

			if (indice < 0) {
				console.warn(`Funcionário com CPF "${cpf}" não encontrado.`);
				return;
			}

			this.funcionarios.splice(indice, 1);
		} catch (error) {
			console.error(`removerFuncionario(): ${error}`);
		}
	}

	public atualizarFuncionario(
		indice:          number,
		cargo:           string | undefined | null
	): void {
		if (indice < 0 || indice > this.funcionarios.length) {
			Mercado.indiceInvalido();
			return;
		}

		if (cargo)
			this.funcionarios[indice].setCargo(cargo);
	}

	public listarFornecedores(): void {
		if (this.fornecedores.length === 0) {
			Mercado.listandoSemNada();
		} else {
			console.table(this.fornecedores);
		}
	}

	public adicionarFornecedor(cnpj: string, nomeEmpresa: string): void {
		try {
			this.fornecedores.push(new Fornecedor(cnpj, nomeEmpresa));
		} catch (error) {
			console.error(`adicionarFornecedor(): ${error}`); 
		}
	}

	public removerFornecedor(cnpj: string): void {
		try {
			const indice = this.fornecedores.findIndex(fornecedor =>
				fornecedor.getCnpj() === cnpj);
			
			if (indice < 0) {
				console.warn(`Fornecedor com CNPJ "${cnpj}" não encontrado.`);
				return;
			}

			this.fornecedores.splice(indice, 1);
		} catch (error) {
			console.error(`removerFornecedor(): ${error}`);
		}
	}

	public atualizarFornecedor(
		indice: number,
		cnpj:   string | undefined | null,
		nome:   string | undefined | null,
	): void {
		if (indice < 0 || indice > this.fornecedores.length) {
			Mercado.indiceInvalido();
			return;
		}

		if (cnpj)
			this.fornecedores[indice].setCnpj(cnpj);
		if (nome)
			this.fornecedores[indice].setNome(nome);
	}
    
	public adicionarPedidoFornecedor(fornecedor: Fornecedor, produtos: Produto[] | undefined | null): void {
		try { 
			this.pedidosFornecedor.push(new PedidoFornecedor(fornecedor, produtos));
		} catch (error) {
			console.log(`adicionarPedidoFornecedor(): ${error}`);
		}
	}
	
	public adicionarVenda(produtos: Produto[] | undefined | null): void {
		try {
			this.vendas.push(new Venda(produtos));
		} catch (error) {
			console.log(`adicionarVenda(): ${error}`);
		}
	}
	
	public relatorioVendas(): void {}
	public relatorioEstoque(): void {}
	public relatorioPedidos(): void {}
};
