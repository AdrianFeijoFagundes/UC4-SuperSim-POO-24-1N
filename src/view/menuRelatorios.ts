import * as ask    from 'readline-sync';
import { Mercado } from '../controllers/Mercado'

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

		opcao = ask.question('Opção selecionada: ', {limit: ['0', '1', '2', '3'],
		                                            limitMessage: 'Digite 0, 1, 2 ou 3.'});

		switch (opcao) {
		case '0': break;
		case '1': mercado.relatorioVendas(); break;
		case '2': mercado.relatorioEstoque(); break;
		case '3': mercado.relatorioPedidos();
		}
		
		ask.question('Pressione a tecla enter para prosseguir...', { hideEchoBack: true, mask: '' });
		console.clear();
	}
}
