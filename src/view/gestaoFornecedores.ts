import * as ask             from 'readline-sync';

import { Mercado          } from '../controllers/Mercado';
import { Produto          } from '../model/Produto';
import { PedidoFornecedor } from '../model/PedidoFornecedor';

/**
	* Gerencia as operações relacionadas aos fornecedores no sistema.
	* Exibe um menu de opções e permite ao usuário adicionar, listar, atualizar, excluir fornecedores e repor o estoque.
	*
	* @param mercado - A instância do objeto `Mercado` que gerencia os fornecedores e produtos.
*/
export function gestaoFornecedores(mercado: Mercado): void {
	let opcao = '';

	while (opcao != '0') {
		let segurarUsuario = false;

		console.clear();

		console.log(`-------------------------`);
		console.log(`-  GESTÃO FORNECEDORES  -`);
		console.log(`-------------------------`);
		console.log(`- 0. Sair               -`);
		console.log(`- 1. Adicionar          -`);
		console.log(`- 2. Listar             -`);
		console.log(`- 3. Atualizar          -`);
		console.log(`- 4. Excluir            -`);
		console.log(`- 5. Repor estoque      -`);
		console.log(`-------------------------`);

		opcao = ask.question('Opção selecionada: ', {limit: ['0', '1', '2', '3', '4', '5'],
		                                            limitMessage: 'Digite 0, 1, 2, 3, 4 ou 5.'});
		
		switch (opcao) {
		case '0': break;
		case '1':
			mercado.adicionarFornecedor(
				ask.question('Qual é o CNPJ da empresa? '),
				ask.question('Qual é o nome da empresa? ')
			);
			break;
		case '2':
			segurarUsuario = true;
			mercado.listarFornecedores();
			break;
		case '3': {
			let indice = 0;
			mercado.listarFornecedores();

			indice = ask.questionInt('Digite o ID do fornecedor: ');

			mercado.atualizarFornecedor(
				indice,
				ask.question('Qual o novo CNPJ da empresa? ', {defaultInput: mercado.fornecedores[indice].getCnpj()}),
				ask.question('Qual o novo nome da empresa? ', {defaultInput: mercado.fornecedores[indice].getNome()})
			);
			break; }
		case '4':
			mercado.listarFornecedores();
			mercado.removerFornecedor(ask.question('Qual o CNPJ do fornecedor a ser removido? '));
			break;
		case '5': {
			let quantidade = -1, indice = -1;
			let pedido = new PedidoFornecedor();

			segurarUsuario = true;

			do {
				console.clear();
				mercado.listarProdutos();
				
				/* Havei vós loops de garantir a validade dos dados fornecidos */
				do {
					indice = ask.questionInt('Digite o indice do produto: ');
				} while (indice < 0 || indice >= mercado.produtos.length);

				do {
					quantidade = ask.questionInt('Quantos produtos você deseja? ');
				} while (quantidade <= 0);

				for (let i = 0; i < quantidade; ++i) {
					if (pedido.adicionarProduto(mercado.produtos[indice]) === false)
						break;
				}
			} while (ask.keyInYN('Você deseja adicionar mais um produto? (y/n) '));

			if (ask.keyInYN(`Você deseja comprar mais produtos pelo custo de ${pedido.getValorTotal()} (y/n)?`)) {
				pedido.realizarPedido();
				console.log(`Pedido realizado com sucesso! Os produtos foram adicionados ao estoque da loja`);
			} else {
				console.log('Pedido cancelado.');
			}

			break; }
		}

		if (segurarUsuario)
			ask.question('Pressione a tecla enter para prosseguir...', {hideEchoBack: true, mask: ''});
	}
}
