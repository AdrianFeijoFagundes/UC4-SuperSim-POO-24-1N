/**
	* @module view
**/

import * as ask              from 'readline-sync';

import { Mercado           } from '../controllers/Mercado';
import { menuFuncionamento } from './menuFuncionamento';
import { menuGestao        } from './menuGestao';
import { menuRelatorios    } from './menuRelatorios';

/**
	* Exibe o menu principal do sistema de mercado, permitindo ao usuário acessar opções de gestão e funcionamento do mercado.
	* O menu continua sendo exibido até que o usuário escolha a opção de sair.
	*
	* @param mercado - Instância do controlador de mercado que é passado para os menus de gestão e funcionamento.
	*
	* Opções do Menu:
	* - 0: Sair - Encerra o menu.
	* - 1: Gestão - Abre o menu de gestão, onde o usuário pode gerenciar produtos, funcionários, fornecedores e relatórios (chama `menuGestao(mercado)`).
	* - 2: Funcionamento - Abre o menu de funcionamento, permitindo ao usuário listar produtos, realizar vendas e listar vendas realizadas (chama `menuFuncionamento(mercado)`).
	* - 3: Relatórios - Abre o menu dos relatórios (chama `menuRelatorios(mercado)`).
*/
export function menuMercado(mercado: Mercado): void {
	let opcao = "";

	while (opcao != '0') {
		console.clear();

		console.log(`-------------------------`);
		console.log(`-       MERCADO         -`);
		console.log(`-------------------------`);
		console.log(`- 0. Sair               -`);
		console.log(`- 1. Gestao             -`);
		console.log(`- 2. Funcionamento      -`);
		console.log(`- 3. Relatorios         -`);
		console.log(`-------------------------`);

		opcao = ask.question('Menu selecionado: ', {limit: ['0', '1', '2', '3'],
		                                            limitMessage: 'Digite 0, 1, 2 ou 3.'});

		switch (opcao) {
		case '0': break;
		case '1': menuGestao(mercado); break;
		case '2': menuFuncionamento(mercado); break;
		case '3': menuRelatorios(mercado);
		}
		
		console.clear();
	}
}
