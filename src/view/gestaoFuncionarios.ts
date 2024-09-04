import { Mercado } from "../controllers/Mercado"

let ask = require("readline-sync")

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

		opcao = ask.question('Opção selecionada: ', {limit: ['0', '1', '2', '3', '4'],
		                                             limitMessage: "Digite 0, 1, 2, 3 ou 4."});
		
		switch (opcao) {
		case '0': break;
		case '1':
			mercado.adicionarFuncionario(
				ask.question('Qual o CPF do funcionário? '),
				ask.question('Qual o nome do funcionário? '),
				new Date(
					ask.questionInt('Qual o dia da contratação do funcionário? '),
					ask.questionInt('Qual o mês da contratação do funcionário? '),
					ask.questionInt('Qual o ano da contratação do funcionário? '),
				),
				ask.keyInSelect(Mercado.cargos, 'Selecione o cargo do funcionário: ', {cancel: false})
			);
			break;
		case '2':
			segurarUsuario = true;
			mercado.listarFuncionarios();
			break;
		case '3':
			mercado.listarFuncionarios();
			mercado.atualizarFuncionario(
				ask.questionInt('Digite o ID do funcionário: '),
				ask.keyInSelect(Mercado.cargos, 'Selecione o novo cargo do funcionário: ', {cancel: false})
			);
			break;
		case '4':
			mercado.listarFuncionarios();
			mercado.removerFuncionario(ask.question('Digite o CPF do funcionário: '));
			break;
		}

		if (segurarUsuario)
			ask.question('Pressione a tecla enter para prosseguir...', {hideEchoBack: true, mask: ''});
	}
}
