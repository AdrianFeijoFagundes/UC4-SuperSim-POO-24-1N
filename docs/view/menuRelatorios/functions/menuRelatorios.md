[**SuperSim POO 24 1N**](../../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../../modules.md) / [view/menuRelatorios](../README.md) / menuRelatorios

# Function: menuRelatorios()

> **menuRelatorios**(`mercado`): `void`

Exibe o menu de relatórios do sistema de mercado, permitindo ao usuário acessar os relatórios de vendas, estoque e pedidos do mercado.
O menu continua sendo exibido até que o usuário escolha a opção de sair.

## Parameters

• **mercado**: [`Mercado`](../../../controllers/Mercado/classes/Mercado.md)

Instância do controlador de mercado que gera os relatórios.

Opções do Menu:
- 0: Sair - Encerra o menu.
- 1: Vendas - Exibe um relatório de todas as vendas do mercado. Essa opção segura o usuário até que ele pressione enter.
- 2: Estoque - Exibe um relatório de estoque do mercado. Essa opção segura o usuário até que ele pressione enter.
- 3: Pedidos - Exibe um relatório de todos os pedidos de reposição de estoque do mercado. Essa opção segura o usuário até que ele pressione enter.

## Returns

`void`

## Defined in

[view/menuRelatorios.ts:16](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/view/menuRelatorios.ts#L16)
