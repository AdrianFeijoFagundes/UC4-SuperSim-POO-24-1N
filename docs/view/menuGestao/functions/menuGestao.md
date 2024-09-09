[**SuperSim POO 24 1N**](../../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../../modules.md) / [view/menuGestao](../README.md) / menuGestao

# Function: menuGestao()

> **menuGestao**(`mercado`): `void`

Exibe o menu principal de gestão do sistema e direciona o usuário para as diferentes opções de gerenciamento.
Permite que o usuário selecione entre gestão de produtos, funcionários, fornecedores e relatórios.

## Parameters

• **mercado**: [`Mercado`](../../../controllers/Mercado/classes/Mercado.md)

Instância do controlador de mercado que é passado para as funções de gestão.

Opções do Menu:
- 0: Sair - Encerra o menu.
- 1: Produtos - Inicia a gestão de registro de produtos (chama `gestaoProdutos(mercado)`).
- 2: Funcionários - Inicia a gestão de funcionários (chama `gestaoFuncionarios(mercado)`).
- 3: Fornecedores - Inicia a gestão de fornecedores (chama `gestaoFornecedores(mercado)`).

## Returns

`void`

## Defined in

[view/menuGestao.ts:20](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/view/menuGestao.ts#L20)
