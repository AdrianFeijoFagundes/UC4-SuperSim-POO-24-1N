[**SuperSim POO 24 1N**](../../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../../modules.md) / [view/gestaoFuncionarios](../README.md) / gestaoFuncionarios

# Function: gestaoFuncionarios()

> **gestaoFuncionarios**(`mercado`): `void`

Gerencia as operações relacionadas aos funcionários no sistema de mercado.
Exibe um menu de opções que permite ao usuário admitir, listar, atualizar e demitir funcionários.
O menu continua sendo exibido até que o usuário escolha a opção de sair.

## Parameters

• **mercado**: [`Mercado`](../../../controllers/Mercado/classes/Mercado.md)

Instância do objeto `Mercado` que gerencia os funcionários e suas operações.

Opções do Menu:
- 0: Sair - Encerra o menu de gestão de funcionários.
- 1: Admitir - Admite um novo funcionário, solicitando o CPF, nome, data de contratação e cargo.
- 2: Listar - Lista todos os funcionários atualmente cadastrados. Essa opção segura o usuário até que ele pressione enter.
- 3: Atualizar - Atualiza o cargo de um funcionário existente, com base no ID fornecido.
- 4: Demitir - Remove um funcionário com base no CPF fornecido.

## Returns

`void`

## Defined in

[view/gestaoFuncionarios.ts:19](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/view/gestaoFuncionarios.ts#L19)
