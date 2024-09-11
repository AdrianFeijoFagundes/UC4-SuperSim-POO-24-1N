/**
	* @module view
**/

import * as ask    from 'readline-sync';
import { Mercado } from '../controllers/Mercado'

/**
	* Exibe o menu de relatórios do sistema de mercado, permitindo ao usuário acessar os relatórios de vendas, estoque e pedidos do mercado.
	* O menu continua sendo exibido até que o usuário escolha a opção de sair.
	*
	* @param mercado - Instância do controlador de mercado que gera os relatórios.
	*
	* Opções do Menu:
	* - 0: Sair - Encerra o menu.
	* - 1: Vendas - Exibe um relatório de todas as vendas do mercado. Essa opção segura o usuário até que ele pressione enter.
	* - 2: Estoque - Exibe um relatório de estoque do mercado. Essa opção segura o usuário até que ele pressione enter.
	* - 3: Pedidos - Exibe um relatório de todos os pedidos de reposição de estoque do mercado. Essa opção segura o usuário até que ele pressione enter.
*/
export function menuRelatorios(mercado: Mercado): void {
	let opcao = "";

	while (opcao != '0') {
		console.clear();

		console.log(`-------------------------`);
		console.log(`-    MENU RELATÓRIOS    -`);
		console.log(`-------------------------`);
		console.log(`- 0. Sair               -`);
		console.log(`- 1. Vendas             -`);
		console.log(`- 2. Estoque            -`);
		console.log(`- 3. Pedidos            -`);
		console.log(`-------------------------`);

		opcao = ask.question('Opcao selecionada: ', {limit: ['0', '1', '2', '3'],
		                                            limitMessage: 'Digite 0, 1, 2 ou 3.'});

		switch (opcao) {
		/* A variável segurarUsuario não existe nesse menu, então usamos o return ao invés de break */
		case '0': return;
		case '1': mercado.relatorioVendas(); break;
		case '2': mercado.relatorioEstoque(); break;
		case '3': mercado.relatorioPedidos();
		}
		
		ask.question('Pressione a tecla enter para prosseguir...', { hideEchoBack: true, mask: '' });
		
		console.clear();
	}
}
