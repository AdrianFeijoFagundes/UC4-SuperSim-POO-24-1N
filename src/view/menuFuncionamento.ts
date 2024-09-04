import * as ask    from 'readline-sync';

import { Venda   } from '../model/Venda';
import { Produto } from '../model/Produto';
import { Mercado } from '../controllers/Mercado';

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

		opcao = ask.question('Opção selecionada: ', {limit: ['0', '1', '2', '3'],
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
				console.error('O sistema está sem produtos registrados, não é possível vender!');
				break;
			}

			const produtosVenda: Produto[] = [];

			do {
				let id: number, quantidade: number;

				console.clear();
				mercado.listarProdutos();
				
				do {
					id = ask.questionInt('Digite o ID do produto: ');
				} while (mercado.produtos[id] === undefined);

				quantidade = ask.questionInt('Digite a quantidade: ');
				
				for (let i = 0; i < quantidade; ++i)
					produtosVenda.push(mercado.produtos[id]);
			} while (ask.keyInYN('Deseja adicionar outro produto? '));

			let venda = new Venda(produtosVenda);

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
	}
}
