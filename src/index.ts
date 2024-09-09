/**
	*
	* @file index
	* @brief Arquivo principal
	*	
	* @module
	* 
	* Este arquivo serve como o ponto inicial do aplicativo. Ele inicializa o sistema, 
	* cria uma instância do controlador de mercado e apresenta o menu principal para o usuário.
	* Através do menu principal, o usuário pode acessar diferentes seções do sistema, como 
	* gestão de produtos, funcionários e fornecedores, além de funcionalidades relacionadas 
	* ao funcionamento do mercado. 
	*
 */

import { Mercado     } from './controllers/Mercado';
import { menuMercado } from './view/menuMercado';

let mercado = new Mercado();

mercado.adicionarFornecedor('20880854000117','Fornecedor 1');
mercado.adicionarFornecedor('32692497000142','Fornecedor 2');
mercado.adicionarFornecedor('48955685000156','Fornecedor 3');
mercado.adicionarFornecedor('42907758000158','Fornecedor 4');
mercado.adicionarFornecedor('26169565000190','Fornecedor 5');

mercado.adicionarProduto('amaciante', '', Mercado.secoes[1], 10, 20, 100, mercado.fornecedores[0]);
mercado.adicionarProduto('detergente', '', Mercado.secoes[1], 10, 20, 100, mercado.fornecedores[1]);
mercado.adicionarProduto('refri', '', Mercado.secoes[2], 10, 20, 100, mercado.fornecedores[2]);
mercado.adicionarProduto('cerveja', '', Mercado.secoes[2], 10, 20, 100, mercado.fornecedores[3]);
mercado.adicionarProduto('salgadinho', '', Mercado.secoes[0], 10, 20, 100, mercado.fornecedores[3]);
mercado.adicionarProduto('macas', '', Mercado.secoes[0], 10, 20, 100, mercado.fornecedores[4]);

mercado.adicionarFuncionario('04522681097','adrian', new Date(2024, 9, 3), Mercado.cargos[0]);

menuMercado(mercado);
