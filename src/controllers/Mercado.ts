import * as ask             from 'readline-sync';

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
	): boolean {
		try {
			this.produtos.push(new Produto(nome, marca, secao, valorCompra, valorVenda, estoque, fornecedor));
			return true;
		} catch (error) {
			console.error(`adicionarProduto(): ${error}`);
			return false;
		}
	}

	public removerProduto(nome: string, marca: string): boolean {
		try {
			const indice = this.produtos.findIndex(produto =>
				produto.getNome() === nome && produto.getMarca() === marca
			);

			if (indice < 0) {
		                console.warn(`Produto com nome "${nome}" e marca "${marca}" não encontrado.`);
				return false;
			}
			
			this.produtos.splice(indice, 1);
			return true;
		} catch (error) {
			console.error(`removerProduto(): ${error}`);
			return false;
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
    
	public adicionarFuncionario(cpf: string, nome: string, dataContratacao: Date, cargo: string): boolean {
		try {
			this.funcionarios.push(new Funcionario(cpf, nome, dataContratacao, cargo));
			return true;
		} catch (error) {
			console.error(`adicionarFuncionario(): ${error}`);
			return false;
		}
	}
    
	public removerFuncionario(cpf: string): boolean {
		try {
			const indice = this.funcionarios.findIndex(funcionario =>
				funcionario.getCpf() === cpf);

			if (indice < 0) {
				console.warn(`Funcionário com CPF "${cpf}" não encontrado.`);
				return false;
			}

			this.funcionarios.splice(indice, 1);
			return true;
		} catch (error) {
			console.error(`removerFuncionario(): ${error}`);
			return false;
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

	public adicionarFornecedor(cnpj: string, nomeEmpresa: string): boolean {
		try {
			this.fornecedores.push(new Fornecedor(cnpj, nomeEmpresa));
			return true;
		} catch (error) {
			console.error(`adicionarFornecedor(): ${error}`); 
			return false;
		}
	}

	public removerFornecedor(cnpj: string): boolean {
		try {
			const indice = this.fornecedores.findIndex(fornecedor =>
				fornecedor.getCnpj() === cnpj);
			
			if (indice < 0) {
				console.warn(`Fornecedor com CNPJ "${cnpj}" não encontrado.`);
				return false;
			}

			this.fornecedores.splice(indice, 1);
			return true;
		} catch (error) {
			console.error(`removerFornecedor(): ${error}`);
			return false;
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
    
	public adicionarPedidoFornecedor(fornecedor: Fornecedor, produtos: Produto[] | undefined | null): boolean {
		try { 
			this.pedidosFornecedor.push(new PedidoFornecedor(fornecedor, produtos));
			return true;
		} catch (error) {
			console.log(`adicionarPedidoFornecedor(): ${error}`);
			return false;
		}
	}
	
	public listarPedidosFornecedor(): void {
		if (this.pedidosFornecedor.length === 0) {
			Mercado.listandoSemNada();
			return;
		}
		console.table(this.pedidosFornecedor);
	}
	
	public adicionarVenda(venda: Venda): boolean {
		try {
			this.vendas.push(venda);
			return true;
		} catch (error) {
			console.log(`adicionarVenda(): ${error}`);
			return false;
		}
	}

	public listarVendas(): void {
		if (this.vendas.length === 0) {
			Mercado.listandoSemNada();
			return;
		}
		console.table(this.vendas);
	}

	public relatorioEstoque(): void {
		if (this.produtos.length === 0) {
			Mercado.listandoSemNada();
			return;
		}

		console.log('Relatório do Estoque:');
		console.table(this.produtos.map(produto => ({
			Nome: produto.getNome(),
			Marca: produto.getMarca(),
			Seção: produto.getSecao(),
			Estoque: produto.getEstoque(),
			ValorCompra: produto.getValorCompra(),
			ValorVenda: produto.getValorVenda()
		})));
	}

	public relatorioVendas(): void {
		let totalLucro = 0;

		if (this.vendas.length === 0) {
			Mercado.listandoSemNada();
			return;
		}

		console.log('Relatório de Vendas:');
		this.vendas.forEach((venda, index) => {
			let totalCusto: number = 0, totalVenda: number = 0, lucro: number = 0;
			console.log(`Venda ${index + 1}:`);
			totalVenda = venda.getValorTotal();
			Array.from(venda.getProdutos().entries()).map(([produto, quantidade]) => {
				totalVenda += quantidade * produto.getValorCompra();
			});

			lucro = totalVenda - totalCusto;
			totalLucro += lucro;

			console.table(Array.from(venda.getProdutos().entries()).map(([produto, quantidade]) => ({
				Nome: produto.getNome(),
				Marca: produto.getMarca(),
				Quantidade: quantidade,
				ValorVenda: produto.getValorVenda(),
				ValorCompra: produto.getValorCompra(),
				TotalVenda: quantidade * produto.getValorVenda(),
				TotalCusto: quantidade * produto.getValorCompra()
			})));

			console.log(`Total da Venda: ${totalVenda}`);
			console.log(`Total do Custo: ${totalCusto}`);
			console.log(`Lucro da Venda: ${lucro}`);
			console.log('-----------------------------');
		});

		console.log(`Lucro Total das Vendas: ${totalLucro}`);
	}

	public relatorioPedidos(): void {
		let custoTotalPedidos = 0;

		if (this.pedidosFornecedor.length === 0) {
			Mercado.listandoSemNada();
			return;
		}

		console.log('Relatório de Pedidos de Fornecedores:');

		this.pedidosFornecedor.forEach((pedido, index) => {
			console.log(`Pedido ${index + 1}:`);
			console.log(`Fornecedor: ${pedido.getFornecedor().getNome()}`);

			let totalPedido = pedido.getProdutos().reduce((total, produto) => {
				const subtotal = produto.getEstoque() * produto.getValorCompra();
				total += subtotal;
				return total;
			}, 0);

			custoTotalPedidos += totalPedido;

			console.table(pedido.getProdutos().map(produto => ({
				Nome: produto.getNome(),
				Marca: produto.getMarca(),
				Quantidade: produto.getEstoque(),
				ValorCompra: produto.getValorCompra(),
				TotalCompra: produto.getEstoque() * produto.getValorCompra()
			})));

			console.log(`Total do Pedido: ${totalPedido}`);
			console.log('-----------------------------');
		});

		console.log(`Custo Total dos Pedidos de Fornecedores: ${custoTotalPedidos}`);
	}
};
