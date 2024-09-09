[**SuperSim POO 24 1N**](../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../modules.md) / [view](../README.md) / menuFuncionamento

# Function: menuFuncionamento()

> **menuFuncionamento**(`mercado`): `void`

Exibe o menu de funcionamento do sistema, permitindo ao usuário listar produtos, realizar vendas e listar vendas realizadas.
O menu continua sendo exibido até que o usuário escolha a opção de sair.

## Parameters

• **mercado**: [`Mercado`](../../controllers/classes/Mercado.md)

Instância do controlador de mercado onde as operações de listagem e venda de produtos serão realizadas.

Opções do Menu:
- 0: Sair - Encerra o menu.
- 1: Listar produtos - Lista os produtos registrados no mercado. Essa opção segura o usuário até que ele pressione enter.
- 2: Realizar venda - Realiza uma venda no mercado. Essa opção segura o usuário até que ele pressione enter.
- 3: Listar vendas - Lista as vendas realizadas no mercado. Essa opção segura o usuário até que ele pressione enter.

## Returns

`void`

## Defined in

[view/menuFuncionamento.ts:23](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/view/menuFuncionamento.ts#L23)
