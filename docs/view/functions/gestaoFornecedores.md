[**SuperSim POO 24 1N**](../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../modules.md) / [view](../README.md) / gestaoFornecedores

# Function: gestaoFornecedores()

> **gestaoFornecedores**(`mercado`): `void`

Gerencia as operações relacionadas aos fornecedores no sistema.
Exibe um menu de opções e permite ao usuário adicionar, listar, atualizar, excluir fornecedores e repor o estoque.
O menu continua sendo exibido até que o usuário escolha a opção de sair.

## Parameters

• **mercado**: [`Mercado`](../../controllers/classes/Mercado.md)

A instância do objeto `Mercado` que gerencia os fornecedores e produtos.

Opções do Menu:
- 0: Sair - Encerra o menu de gestão de fornecedores.
- 1: Adicionar - Permite adicionar um novo fornecedor, solicitando o CNPJ e o nome da empresa.
- 2: Listar - Lista todos os fornecedores cadastrados. Essa opção segura o usuário até que ele pressione enter.
- 3: Atualizar - Atualiza as informações de um fornecedor existente, com base no ID fornecido.
- 4: Excluir - Remove um fornecedor com base no CNPJ fornecido.
- 5: Repor estoque - Permite repor o estoque de produtos por meio de um pedido ao fornecedor. O usuário pode adicionar produtos ao pedido e confirmar a compra. Essa opção segura o usuário até que ele pressione enter.

## Returns

`void`

## Defined in

[view/gestaoFornecedores.ts:26](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/view/gestaoFornecedores.ts#L26)
