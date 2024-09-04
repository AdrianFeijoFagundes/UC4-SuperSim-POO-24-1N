import * as ask              from 'readline-sync';

import { Mercado           } from '../controllers/Mercado';
import { menuFuncionamento } from './menuFuncionamento';
import { menuGestao        } from './menuGestao';

export function menuMercado(mercado: Mercado): void {
	let opcao = "";

	while (opcao != '0') {
		console.clear();

		console.log(`-------------------------`);
		console.log(`-       MERCADO         -`);
		console.log(`-------------------------`);
		console.log(`- 0. Sair               -`);
		console.log(`- 1. Gestão             -`);
		console.log(`- 2. Funcionamento      -`);
		console.log(`-------------------------`);

		opcao = ask.question('Menu selecionado: ', {limit: ['0', '1', '2'],
		                                            limitMessage: 'Digite 0, 1 ou 2.'});

		switch (opcao) {
		case '0': break;
		case '1': menuGestao(mercado); break;
		case '2': menuFuncionamento(mercado); break;
		}
		
		console.clear();
	}
}
