import * as ask    from 'readline-sync';

import { Mercado } from '../controllers/Mercado';
import { Produto } from '../model/Produto';

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
		// A fazer: Usar a classe PedidoFornecedor aqui
		case '5': {
			let quantidade, indice;
			segurarUsuario = true;
			
			mercado.listarProdutos();
			
			/* Havei vós loops de garantir a validade dos dados fornecidos */
			do {
				indice = ask.questionInt('Digite o indice do produto: ');
			} while (indice < 0 || indice >= mercado.produtos.length);

			do {
				quantidade = ask.questionInt('Quantos produtos você deseja? ');
			} while (quantidade <= 0);

			if (ask.keyInYN(`Você deseja comprar mais produtos pelo custo de ${mercado.produtos[indice].getValorCompra() * quantidade} (y/n)?`)) {
				mercado.produtos[indice].setEstoque(mercado.produtos[indice].getEstoque() + quantidade);
				console.log('Pedido realizado com sucesso! Mais unidades foram adicionadas ao estoque.');
			} else {
				console.log('Pedido cancelado.');
			}

			break; }
		}

		if (segurarUsuario)
			ask.question('Pressione a tecla enter para prosseguir...', {hideEchoBack: true, mask: ''});
	}
}
