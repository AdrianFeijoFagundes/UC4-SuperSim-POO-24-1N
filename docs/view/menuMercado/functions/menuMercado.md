[**SuperSim POO 24 1N**](../../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../../modules.md) / [view/menuMercado](../README.md) / menuMercado

# Function: menuMercado()

> **menuMercado**(`mercado`): `void`

Exibe o menu principal do sistema de mercado, permitindo ao usuário acessar opções de gestão e funcionamento do mercado.
O menu continua sendo exibido até que o usuário escolha a opção de sair.

## Parameters

• **mercado**: [`Mercado`](../../../controllers/Mercado/classes/Mercado.md)

Instância do controlador de mercado que é passado para os menus de gestão e funcionamento.

Opções do Menu:
- 0: Sair - Encerra o menu.
- 1: Gestão - Abre o menu de gestão, onde o usuário pode gerenciar produtos, funcionários, fornecedores e relatórios (chama `menuGestao(mercado)`).
- 2: Funcionamento - Abre o menu de funcionamento, permitindo ao usuário listar produtos, realizar vendas e listar vendas realizadas (chama `menuFuncionamento(mercado)`).
- 3: Relatórios - Abre o menu dos relatórios (chama `menuRelatorios(mercado)`).

## Returns

`void`

## Defined in

[view/menuMercado.ts:20](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/view/menuMercado.ts#L20)
