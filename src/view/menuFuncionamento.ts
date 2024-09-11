/**
	* @module view
**/

import * as ask    from 'readline-sync';

import { Venda   } from '../model/Venda';
import { Produto } from '../model/Produto';
import { Mercado } from '../controllers/Mercado';

/**
	* Exibe o menu de funcionamento do sistema, permitindo ao usuário listar produtos, realizar vendas e listar vendas realizadas.
	* O menu continua sendo exibido até que o usuário escolha a opção de sair.
	*
	* @param mercado - Instância do controlador de mercado onde as operações de listagem e venda de produtos serão realizadas.
	*
	* Opções do Menu:
	* - 0: Sair - Encerra o menu.
	* - 1: Listar produtos - Lista os produtos registrados no mercado. Essa opção segura o usuário até que ele pressione enter.
	* - 2: Realizar venda - Realiza uma venda no mercado. Essa opção segura o usuário até que ele pressione enter.
	* - 3: Listar vendas - Lista as vendas realizadas no mercado. Essa opção segura o usuário até que ele pressione enter.
*/
export function menuFuncionamento(mercado: Mercado): void {
	let opcao = '';

	while (opcao !== '0') {
		let segurarUsuario = false;

		console.clear();

		console.log(`------------------------------`);
		console.log(`-      MENU FUNCIONAMENTO    -`);
		console.log(`------------------------------`);
		console.log(`- 0. Sair                    -`);
		console.log(`- 1. Listar Produtos         -`);
		console.log(`- 2. Realizar Venda          -`);
		console.log(`- 3. Listar Vendas           -`);
		console.log(`------------------------------`);

		opcao = ask.question('Opcao selecionada: ', {limit: ['0', '1', '2', '3'],
		                                             limitMessage: "Digite 0, 1, 2 ou 3."});

		switch (opcao) {
		case '0': break;
		case '1':
			segurarUsuario = true;
			mercado.listarProdutos();
			break;
		case '2': {
			segurarUsuario = true;

			if (mercado.produtos.length === 0) {
				console.error('O sistema esta sem produtos registrados, nao ha como vender!');
				break;
			}
			
			const venda: Venda = new Venda();

			do {
				let id: number, quantidade: number;
				
				/* Cabeçalho para que o usuário possa se situar */
				console.clear();
				console.info(venda.toString());
				mercado.listarProdutos();
				
				do {
					console.info('Nota: Para cancelar, use qualquer ID e coloque a quantidade como zero.');
					id = ask.questionInt('Digite o ID do produto: ');
				} while (mercado.produtos[id] === undefined);

				quantidade = ask.questionInt('Digite a quantidade: ');
	
				for (let i = 0; i < quantidade; ++i)
					venda.adicionarProduto(mercado.produtos[id]);
			} while (ask.keyInYN('Deseja adicionar outro produto? '));

			console.log(venda.realizarVenda(
				ask.question('Nome do cliente: '),
				ask.question('CPF (opcional): ', {defaultInput: undefined}))
			);

			mercado.adicionarVenda(venda);
			break; }
		case '3':
			segurarUsuario = true;
			mercado.listarVendas();
			break;
		}

		if (segurarUsuario)
			ask.question('Pressione a tecla enter para prosseguir...', { hideEchoBack: true, mask: '' });
		
		console.clear();
	}
}
