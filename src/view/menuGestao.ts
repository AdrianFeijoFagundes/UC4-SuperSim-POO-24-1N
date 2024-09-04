let ask = require("readline-sync")

import { Mercado } from "../controllers/Mercado"
import { gestaoFornecedores } from "./gestaoFornecedores"
import { gestaoFuncionarios } from "./gestaoFuncionarios"
import { gestaoProdutos } from "./gestaoProdutos"
import { menuRelatorios } from "./menuRelatorios"

export function menuGestao(mercado: Mercado): void {
	let opcao = "";

	while (opcao != '0') {
		console.clear();

		console.log(`-------------------------`);
		console.log(`-        GESTÃO         -`);
		console.log(`-------------------------`);
		console.log(`- 0. Sair               -`);
		console.log(`- 1. Produtos           -`);
		console.log(`- 2. Funcionários       -`);
		console.log(`- 3. Fornecedores       -`);
		console.log(`- 4. Relatórios         -`);
		console.log(`-------------------------`);

		opcao = ask.question('Menu selecionado: ', {limit: ['0', '1', '2', '3', '4'],
		                                            limitMessage: 'Digite 0, 1, 2, 3 ou 4.'});

		switch (opcao) {
		case '0': break;
		case '1': gestaoProdutos(mercado); break;
		case '2': gestaoFuncionarios(mercado); break;
		case '3': gestaoFornecedores(mercado); break;
		case '4': menuRelatorios(mercado); break;
		default:
			console.error(`Opção inválida.`);
			ask.question('Pressione a tecla enter para prosseguir...', {hideEchoBack: true, mask: ''});
		}

		console.clear();
	}
}
