[**SuperSim POO 24 1N**](../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../modules.md) / [view](../README.md) / gestaoProdutos

# Function: gestaoProdutos()

> **gestaoProdutos**(`mercado`): `void`

Gerencia as operações relacionadas aos produtos registrados no sistema de mercado.
Oferece um menu interativo para adicionar, listar, atualizar e remover produtos.
O menu continua sendo exibido até que o usuário escolha a opção de sair.

## Parameters

• **mercado**: [`Mercado`](../../controllers/classes/Mercado.md)

Instância do controlador de mercado onde as operações de produto serão realizadas.

Opções do Menu:
- 0: Sair - Encerra o menu de gestão de produtos.
- 1: Adicionar - Permite adicionar um novo produto. Essa opção segura o usuário até que ele pressione enter.
- 2: Listar - Lista todos os produtos atualmente cadastrados. Essa opção segura o usuário até que ele pressione enter.
- 3: Atualizar - Atualiza as informações de um produto existente. Essa opção segura o usuário até que ele pressione enter.
- 4: Remover - Remove um produto com base no nome e marca fornecidos.

## Returns

`void`

## Defined in

[view/gestaoProdutos.ts:24](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/view/gestaoProdutos.ts#L24)
