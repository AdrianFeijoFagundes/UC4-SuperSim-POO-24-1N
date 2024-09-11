/**
	* @module view
**/

import * as ask    from 'readline-sync';

import { Mercado } from '../controllers/Mercado';

/**
	* Gerencia as operações relacionadas aos funcionários no sistema de mercado.
	* Exibe um menu de opções que permite ao usuário admitir, listar, atualizar e demitir funcionários.
	* O menu continua sendo exibido até que o usuário escolha a opção de sair.
	*
	* @param mercado - Instância do objeto `Mercado` que gerencia os funcionários e suas operações.
	*
	* Opções do Menu:
	* - 0: Sair - Encerra o menu de gestão de funcionários.
	* - 1: Admitir - Admite um novo funcionário, solicitando o CPF, nome, data de contratação e cargo.
	* - 2: Listar - Lista todos os funcionários atualmente cadastrados. Essa opção segura o usuário até que ele pressione enter.
	* - 3: Atualizar - Atualiza o cargo de um funcionário existente, com base no ID fornecido.
	* - 4: Demitir - Remove um funcionário com base no CPF fornecido.
*/
export function gestaoFuncionarios(mercado: Mercado): void {
	let opcao = '';
	
	while (opcao != '0') {
		let segurarUsuario = false;

		console.clear();

		console.log(`-------------------------`);
		console.log(`-  GESTÃO FUNCIONÁRIOS  -`);
		console.log(`-------------------------`);
		console.log(`- 0. Sair               -`);
		console.log(`- 1. Admitir            -`);
		console.log(`- 2. Listar             -`);
		console.log(`- 3. Atualizar          -`);
		console.log(`- 4. Demitir            -`);
		console.log(`-------------------------`);

		opcao = ask.question('Opcao selecionada: ', {limit: ['0', '1', '2', '3', '4'],
		                                             limitMessage: "Digite 0, 1, 2, 3 ou 4."});
		
		switch (opcao) {
		case '0': break;
		case '1':
			mercado.adicionarFuncionario(
				ask.question('Qual o CPF do funcionario? '),
				ask.question('Qual o nome do funcionario? '),
				new Date(
					ask.questionInt('Qual o dia da contratacao do funcionario? '),
					ask.questionInt('Qual o mês da contratacao do funcionario? '),
					ask.questionInt('Qual o ano da contratacao do funcionario? '),
				),
				Mercado.cargos[ask.keyInSelect(Mercado.cargos, 'Selecione o cargo do funcionario: ', {cancel: false})]
			);
			break;
		case '2':
			segurarUsuario = true;
			mercado.listarFuncionarios();
			break;
		case '3':
			mercado.listarFuncionarios();
			mercado.atualizarFuncionario(
				ask.questionInt('Digite o ID do funcionario: '),
				Mercado.cargos[ask.keyInSelect(Mercado.cargos, 'Selecione o novo cargo do funcionario: ', {cancel: false})]
			);
			break;
		case '4':
			mercado.listarFuncionarios();
			mercado.removerFuncionario(ask.question('Digite o CPF do funcionario: '));
			break;
		}

		if (segurarUsuario)
			ask.question('Pressione a tecla enter para prosseguir...', {hideEchoBack: true, mask: ''});
		
		console.clear();
	}
}
