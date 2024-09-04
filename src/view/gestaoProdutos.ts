import { Venda   } from '../model/Venda';

import { Mercado } from '../controllers/Mercado'

let ask = require("readline-sync");

export function gestaoProdutos(mercado: Mercado): void {
	let opcao = '';

	while (opcao != '0') {
		let segurarUsuario = false;

		console.clear();

		console.log(`-------------------------`);
		console.log(`-    GESTÃO PRODUTOS    -`);
		console.log(`-------------------------`);
		console.log(`- 0. Sair               -`);
		console.log(`- 1. Adicionar          -`);
		console.log(`- 2. Listar             -`);
		console.log(`- 3. Atualizar          -`);
		console.log(`- 4. Remover            -`);
		console.log(`-------------------------`);

		opcao = ask.question('Opção selecionada: ', {limit: ['0', '1', '2', '3', '4'],
		                                             limitMessage: "Digite 0, 1, 2, 3 ou 4."});

		switch (opcao) {
		case '0': break;
		case '1':
			segurarUsuario = true;
			mercado.adicionarProduto(
				ask.question('Qual o nome do produto? '),
				ask.question('Qual a marca do produto? '),
				ask.keyInSelect(Mercado.secoes, 'Qual a seção do produto?', {cancel: false}),
				ask.questionInt('Qual o valor de compra do produto? '),
				ask.questionInt('Qual o valor de venda do produto? '),
				0 /* Estoque*/,
				ask.keyInSelect(mercado.fornecedores, 'Qual o fornecedor do produto?', {cancel: false})
			);

			console.log('Produto registrado com sucesso!');
			console.log('Obs.: Para adicionar produtos no estoque, realize um pedido no menu de fornecedores!');
			break;
		case '2':
			segurarUsuario = true;
			mercado.listarProdutos();
			break;
		case '3': {
			let indice;

			mercado.listarProdutos();

			indice = ask.questionInt()
			console.log('Nota: Você pode deixar em branco se quiser ignorar os campos');

			mercado.atualizarProduto(
				indice,
				ask.question('Qual o novo nome do produto? ', {defaultInput: null}), 
				ask.question('Qual a nova marca do produto? ', {defaultInput: null}), 
				ask.keyInSelect(Mercado.secoes, 'Qual a nova seção do produto? '), 
				ask.questionInt('Qual o novo valor de compra do produto? ', {defaultInput: null}), 
				ask.questionInt('Qual o novo valor de venda do produto? ', {defaultInput: null}), 
				null,
				ask.keyInSelect(mercado.fornecedores, 'Qual o novo fornecedor do produto? ')
			);
			break; }
		case '4':
			mercado.listarProdutos();
			mercado.removerProduto(ask.question('Digite o nome do produto: '), ask.question('Digite a marca do produto: '));
			break;
		}

		if (segurarUsuario)
			ask.question('Pressione a tecla enter para prosseguir...', {hideEchoBack: true, mask: ''});
	}
}
