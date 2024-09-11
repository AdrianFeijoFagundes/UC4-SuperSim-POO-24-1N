/**
	* @module view
**/

import * as ask    from 'readline-sync';

import { Venda   } from '../model/Venda';
import { Mercado } from '../controllers/Mercado';

/**
	* Gerencia as operações relacionadas aos produtos registrados no sistema de mercado.
	* Oferece um menu interativo para adicionar, listar, atualizar e remover produtos.
	* O menu continua sendo exibido até que o usuário escolha a opção de sair.
	*
	* @param mercado - Instância do controlador de mercado onde as operações de produto serão realizadas.
	*
	* Opções do Menu:
	* - 0: Sair - Encerra o menu de gestão de produtos.
	* - 1: Adicionar - Permite adicionar um novo produto. Essa opção segura o usuário até que ele pressione enter.
	* - 2: Listar - Lista todos os produtos atualmente cadastrados. Essa opção segura o usuário até que ele pressione enter.
	* - 3: Atualizar - Atualiza as informações de um produto existente. Essa opção segura o usuário até que ele pressione enter.
	* - 4: Remover - Remove um produto com base no nome e marca fornecidos.
*/
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

		opcao = ask.question('Opcao selecionada: ', {limit: ['0', '1', '2', '3', '4'],
	                                             limitMessage: "Digite 0, 1, 2, 3 ou 4."});

		switch (opcao) {
		case '0': break;
		case '1': {
			let stringFornecedores: string[] = [];
			mercado.fornecedores.forEach(fornecedor =>
				stringFornecedores.push(fornecedor.toString())
			);

			segurarUsuario = true;
			mercado.adicionarProduto(
				ask.question('Qual o nome do produto? '),
				ask.question('Qual a marca do produto? '),
				Mercado.secoes[ask.keyInSelect(Mercado.secoes, 'Qual a secao do produto?', {cancel: false})],
				ask.questionFloat('Qual o valor de compra do produto? '),
				ask.questionFloat('Qual o valor de venda do produto? '),
				ask.questionInt('Quantos itens o produto ja tem em estoque?'),
				mercado.fornecedores[ask.keyInSelect(stringFornecedores, 'Qual o fornecedor do produto?', {cancel: false})]
			);

			console.log('Produto registrado com sucesso!');
			console.info('Nota: Para adicionar mais produtos no estoque, realize um pedido no menu de fornecedores.');
			break; }
		case '2':
			segurarUsuario = true;
			mercado.listarProdutos();
			break;
		case '3': {
			let stringFornecedores: string[] = [];
			mercado.fornecedores.forEach(fornecedor =>
				stringFornecedores.push(fornecedor.toString())
			);
			let indice;

			segurarUsuario = true;

			mercado.listarProdutos();

			indice = ask.questionInt('Digite o ID do produto: ');
			console.info('Nota: Voce pode deixar em branco se quiser ignorar os campos de nome e marca.');

			mercado.atualizarProduto(
				indice,
				ask.question('Qual o novo nome do produto? ', {defaultInput: undefined}), 
				ask.question('Qual a nova marca do produto? ', {defaultInput: undefined}), 
				Mercado.secoes[ask.keyInSelect(Mercado.secoes, 'Qual a nova secao do produto? ')], 
				ask.questionFloat('Qual o novo valor de compra do produto? '), 
				ask.questionFloat('Qual o novo valor de venda do produto? '), 
				undefined,
				mercado.fornecedores[ask.keyInSelect(stringFornecedores, 'Novo fornecedor para o produto: ')]
			);

			console.info('Produto alterado com sucesso!');
			break; }
		case '4':
			mercado.listarProdutos();
			mercado.removerProduto(ask.question('Digite o nome do produto: '), ask.question('Digite a marca do produto: '));
			break;
		}

		if (segurarUsuario)
			ask.question('Pressione a tecla enter para prosseguir...', {hideEchoBack: true, mask: ''});
		
		console.clear();
	}
}
