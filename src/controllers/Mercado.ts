/**
	* @module controllers
**/

import * as ask             from 'readline-sync';

import { Fornecedor       } from '../model/Fornecedor';
import { Funcionario      } from '../model/Funcionario';
import { PedidoFornecedor } from '../model/PedidoFornecedor';
import { Produto          } from '../model/Produto';
import { Venda            } from '../model/Venda';

/**
	* Representa o sistema de gerenciamento de um mercado, incluindo produtos, funcionários, fornecedores, vendas e pedidos de fornecedores.
	* Oferece métodos para adicionar, listar, atualizar e remover itens em cada uma dessas categorias, bem como para gerar relatórios.
*/
export class Mercado {
	/** Lista de fornecedores cadastrados no mercado. */
	public fornecedores:      Fornecedor[]       = [];
	/** Lista de funcionários cadastrados no mercado. */
	public funcionarios:      Funcionario[]      = [];
	/** Lista de produtos cadastrados no mercado. */
	public produtos:          Produto[]          = [];
	/** Lista de vendas realizadas no mercado. */
	public vendas:            Venda[]            = [];
	/** Lista de pedidos realizados aos fornecedores. */
	public pedidosFornecedor: PedidoFornecedor[] = [];

	/** Seções disponíveis para produtos no mercado. */
	public static secoes: string[] = ['Alimentos', 'Limpeza', 'Bebidas']
	/** Cargos disponíveis para funcionários no mercado. */
	public static cargos: string[] = ['Gerente', 'Caixa', 'Estoquista']

	/** Construtor da classe Mercado. Inicializa uma nova instância do mercado. */
	public constructor() {}

	/**
		 * Exibe uma mensagem de aviso quando o índice fornecido está fora dos limites.
		 * @private
	 */
	private static indiceInvalido(): void {
		console.warn(`Posicao selecionada fora dos limites.`);
	}

	/** 
		* Exibe uma mensagem de aviso quando não há entradas do tipo desejado no sistema.
		* @private
	*/
	private static listandoSemNada(): void {
		console.warn('Não há entrada do tipo desejado no sistema.');
	}

	/**
		* Lista todos os produtos cadastrados no mercado.
		* Se não houver produtos, exibe uma mensagem de aviso.
	*/
	public listarProdutos(): void {
		if (this.produtos.length === 0) {
			Mercado.listandoSemNada();
		} else {
			console.table(this.produtos);
		}
	}

	/**
		* Adiciona um novo produto ao mercado.
		* @param nome - Nome do produto.
		* @param marca - Marca do produto.
		* @param secao - Seção onde o produto está localizado.
		* @param valorCompra - Valor de compra do produto.
		* @param valorVenda - Valor de venda do produto.
		* @param estoque - Quantidade de itens em estoque.
		* @param fornecedor - Fornecedor do produto.
		* @returns Retorna true se o produto for adicionado com sucesso; caso contrário, retorna false.
	*/
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

	/**
		 * Remove um produto do mercado com base no nome e marca fornecidos.
		 * @param nome - Nome do produto a ser removido.
		 * @param marca - Marca do produto a ser removido.
		 * @returns Retorna true se o produto for removido com sucesso; caso contrário, retorna false.
	 */
	public removerProduto(nome: string, marca: string): boolean {
		try {
			const indice = this.produtos.findIndex(produto =>
				produto.getNome() === nome && produto.getMarca() === marca
			);

			if (indice < 0) {
		                console.warn(`Produto com nome "${nome}" e marca "${marca}" nao encontrado.`);
				return false;
			}
			
			this.produtos.splice(indice, 1);
			return true;
		} catch (error) {
			console.error(`removerProduto(): ${error}`);
			return false;
		}
	}

	/**
		* Atualiza as informações de um produto existente.
		* @param indice - Índice do produto a ser atualizado.
		* @param nome - Novo nome do produto (opcional).
		* @param marca - Nova marca do produto (opcional).
		* @param secao - Nova seção do produto (opcional).
		* @param valorCompra - Novo valor de compra do produto (opcional).
		* @param valorVenda - Novo valor de venda do produto (opcional).
		* @param estoque - Novo valor de estoque do produto (opcional).
		* @param fornecedor - Novo fornecedor do produto (opcional).
	*/
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

	/**
		* Lista todos os funcionários cadastrados no mercado.
		* Se não houver funcionários, exibe uma mensagem de aviso.
	*/
	public listarFuncionarios(): void {
		if (this.funcionarios.length === 0) {
			Mercado.listandoSemNada();
		} else {
			console.table(this.funcionarios);
		}
	}
    

	/**
		* Adiciona um novo funcionário ao mercado.
		* @param cpf - CPF do funcionário.
		* @param nome - Nome do funcionário.
		* @param dataContratacao - Data de contratação do funcionário.
		* @param cargo - Cargo do funcionário.
		* @returns Retorna true se o funcionário for adicionado com sucesso; caso contrário, retorna false.
	*/
	public adicionarFuncionario(cpf: string, nome: string, dataContratacao: Date, cargo: string): boolean {
		try {
			this.funcionarios.push(new Funcionario(cpf, nome, dataContratacao, cargo));
			return true;
		} catch (error) {
			console.error(`adicionarFuncionario(): ${error}`);
			return false;
		}
	}
    
	/**
		* Remove um funcionário do mercado com base no CPF fornecido.
		* @param cpf - CPF do funcionário a ser removido.
		* @returns Retorna true se o funcionário for removido com sucesso; caso contrário, retorna false.
	*/
	public removerFuncionario(cpf: string): boolean {
		try {
			const indice = this.funcionarios.findIndex(funcionario =>
				funcionario.getCpf() === cpf);

			if (indice < 0) {
				console.warn(`Funcionário com CPF "${cpf}" nao encontrado.`);
				return false;
			}

			this.funcionarios.splice(indice, 1);
			return true;
		} catch (error) {
			console.error(`removerFuncionario(): ${error}`);
			return false;
		}
	}


	/**
		* Atualiza o cargo de um funcionário existente.
		* @param indice - Índice do funcionário a ser atualizado.
		* @param cargo - Novo cargo do funcionário (opcional).
	*/
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


	/**
		* Lista todos os fornecedores cadastrados no mercado.
		* Se não houver fornecedores, exibe uma mensagem de aviso.
	*/
	public listarFornecedores(): void {
		if (this.fornecedores.length === 0) {
			Mercado.listandoSemNada();
		} else {
			console.table(this.fornecedores);
		}
	}
	
	/**
		* Adiciona um novo fornecedor ao mercado.
		* @param cnpj - CNPJ do fornecedor.
		* @param nomeEmpresa - Nome da empresa fornecedora.
		* @returns Retorna true se o fornecedor for adicionado com sucesso; caso contrário, retorna false.
	*/
	public adicionarFornecedor(cnpj: string, nomeEmpresa: string): boolean {
		try {
			this.fornecedores.push(new Fornecedor(cnpj, nomeEmpresa));
			return true;
		} catch (error) {
			console.error(`adicionarFornecedor(): ${error}`); 
			return false;
		}
	}

	/**
		* Remove um fornecedor do mercado com base no CNPJ fornecido.
		* @param cnpj - CNPJ do fornecedor a ser removido.
		* @returns Retorna true se o fornecedor for removido com sucesso; caso contrário, retorna false.
	*/
	public removerFornecedor(cnpj: string): boolean {
		try {
			const indice = this.fornecedores.findIndex(fornecedor =>
				fornecedor.getCnpj() === cnpj);
			
			if (indice < 0) {
				console.warn(`Fornecedor com CNPJ "${cnpj}" nao encontrado.`);
				return false;
			}

			this.fornecedores.splice(indice, 1);
			return true;
		} catch (error) {
			console.error(`removerFornecedor(): ${error}`);
			return false;
		}
	}

	/**
		* Atualiza as informações de um fornecedor existente.
		* @param indice - Índice do fornecedor a ser atualizado.
		* @param cnpj - Novo CNPJ do fornecedor (opcional).
		* @param nome - Novo nome da empresa fornecedora (opcional).
	*/
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
   
	/**
		* Adiciona um novo pedido de fornecedor ao mercado.
		* @param pedido - Pedido de fornecedor a ser adicionado.
		* @returns Retorna true se o pedido for adicionado com sucesso; caso contrário, retorna false.
	*/
	public adicionarPedidoFornecedor(pedido: PedidoFornecedor): boolean {
		try { 
			this.pedidosFornecedor.push(pedido);
			return true;
		} catch (error) {
			console.log(`adicionarPedidoFornecedor(): ${error}`);
			return false;
		}
	}
	
	/**
		* Lista todos os pedidos de fornecedores realizados.
		* Se não houver pedidos, exibe uma mensagem de aviso.
	*/
	public listarPedidosFornecedor(): void {
		if (this.pedidosFornecedor.length === 0) {
			Mercado.listandoSemNada();
			return;
		}
		console.table(this.pedidosFornecedor);
	}

	/**
		* Adiciona uma nova venda ao mercado.
		* @param venda - Venda a ser adicionada.
		* @returns Retorna true se a venda for adicionada com sucesso; caso contrário, retorna false.
	*/
	public adicionarVenda(venda: Venda): boolean {
		try {
			this.vendas.push(venda);
			return true;
		} catch (error) {
			console.log(`adicionarVenda(): ${error}`);
			return false;
		}
	}


	/**
		* Lista todas as vendas realizadas no mercado.
		* Se não houver vendas, exibe uma mensagem de aviso.
	*/
	public listarVendas(): void {
		if (this.vendas.length === 0) {
			Mercado.listandoSemNada();
			return;
		}
		console.table(this.vendas);
	}

	/**
		* Gera um relatório do estoque atual, exibindo informações sobre cada produto.
		* Se não houver produtos, exibe uma mensagem de aviso.
	*/
	public relatorioEstoque(): void {
		let estoqueTotal = 0;

		if (this.produtos.length === 0) {
			Mercado.listandoSemNada();
			return;
		}

		console.log('Relatorio do Estoque:');
			
		this.produtos.forEach(produto => {
			console.log(`Nome: ${produto.getNome()}`);
			console.log(`-> Estoque: ${produto.getEstoque()}`);
			estoqueTotal += produto.getEstoque();
		});

		console.log(`Total de produtos em estoque: ${estoqueTotal}`);
	}

	/**
		* Gera um relatório detalhado das vendas realizadas.
		* Exibe o total de lucro obtido em cada venda e o lucro total acumulado.
		* Se não houver vendas, exibe uma mensagem de aviso.
	*/
	public relatorioVendas(): void {
		let totalLucro = 0;

		if (this.vendas.length === 0) {
			Mercado.listandoSemNada();
			return;
		}

		console.log('Relatorio de Vendas:');
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
	/**
		* Gera um relatório detalhado dos pedidos realizados aos fornecedores.
		* Exibe o custo total de cada pedido e o custo total acumulado.
		* Se não houver pedidos, exibe uma mensagem de aviso.
	*/
	public relatorioPedidos(): void {
		let custoTotalPedidos = 0;

		if (this.pedidosFornecedor.length === 0) {
			Mercado.listandoSemNada();
			return;
		}

		console.log('Relatorio de Pedidos de Fornecedores:');

		this.pedidosFornecedor.forEach((pedido, index) => {
			let fornecedor = pedido.getFornecedor();

			console.log(`Pedido ${index + 1}:`);

			if (fornecedor)
				console.log(`Fornecedor: ${fornecedor.getNome()}`);

			let totalPedido = 0;
		
			pedido.getProdutos().forEach((quantidade, produto) => {
				const subtotal = quantidade * produto.getValorCompra();
				totalPedido += subtotal;
			});

			custoTotalPedidos += totalPedido;

			console.table(Array.from(pedido.getProdutos().entries()).map(([produto, quantidade]) => ({
				Nome: produto.getNome(),
				Marca: produto.getMarca(),
				Quantidade: quantidade,
				ValorCompra: produto.getValorCompra(),
				TotalCompra: quantidade * produto.getValorCompra()
			})));

			console.log(`Total do Pedido: ${totalPedido}`);
			console.log('-----------------------------');
		});

		console.log(`Custo Total dos Pedidos de Fornecedores: ${custoTotalPedidos}`);
	}
};
