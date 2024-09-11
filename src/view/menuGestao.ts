/**
	* @module view
**/

import * as ask               from 'readline-sync';

import { Mercado            } from '../controllers/Mercado';
import { gestaoFornecedores } from './gestaoFornecedores';
import { gestaoFuncionarios } from './gestaoFuncionarios';
import { gestaoProdutos     } from './gestaoProdutos';

/**
	* Exibe o menu principal de gestão do sistema e direciona o usuário para as diferentes opções de gerenciamento.
	* Permite que o usuário selecione entre gestão de produtos, funcionários, fornecedores e relatórios.
	*
	* @param mercado - Instância do controlador de mercado que é passado para as funções de gestão.
	* 
	* Opções do Menu:
	* - 0: Sair - Encerra o menu.
	* - 1: Produtos - Inicia a gestão de registro de produtos (chama `gestaoProdutos(mercado)`).
	* - 2: Funcionários - Inicia a gestão de funcionários (chama `gestaoFuncionarios(mercado)`).
	* - 3: Fornecedores - Inicia a gestão de fornecedores (chama `gestaoFornecedores(mercado)`). 
*/
export function menuGestao(mercado: Mercado): void {
	let opcao = "";

	while (opcao != '0') {
		console.clear();

		console.log(`-------------------------`);
		console.log(`-        GESTÃO         -`);
		console.log(`-------------------------`);
		console.log(`- 0. Sair               -`);
		console.log(`- 1. Produtos           -`);
		console.log(`- 2. Funcionarios       -`);
		console.log(`- 3. Fornecedores       -`);
		console.log(`-------------------------`);

		opcao = ask.question('Menu selecionado: ', {limit: ['0', '1', '2', '3'],
		                                            limitMessage: 'Digite 0, 1, 2 ou 3.'});
		switch (opcao) {
		case '0': break;
		case '1': gestaoProdutos(mercado);     break;
		case '2': gestaoFuncionarios(mercado); break;
		case '3': gestaoFornecedores(mercado); break;
		}

		console.clear();
	}
}
