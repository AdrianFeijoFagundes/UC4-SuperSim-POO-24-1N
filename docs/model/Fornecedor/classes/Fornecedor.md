[**SuperSim POO 24 1N**](../../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../../modules.md) / [model/Fornecedor](../README.md) / Fornecedor

# Class: Fornecedor

Representa um fornecedor no sistema.

## Constructors

### new Fornecedor()

> **new Fornecedor**(`cnpj`, `nome`): [`Fornecedor`](Fornecedor.md)

Cria uma instância de `Fornecedor`.

#### Parameters

• **cnpj**: `string`

O CNPJ do fornecedor.

• **nome**: `string`

O nome da empresa fornecedora.

#### Returns

[`Fornecedor`](Fornecedor.md)

#### Defined in

[model/Fornecedor.ts:10](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Fornecedor.ts#L10)

## Methods

### clone()

> **clone**(): [`Fornecedor`](Fornecedor.md)

Cria uma cópia do fornecedor atual. Usada para evitar referenciação ao objeto original.

#### Returns

[`Fornecedor`](Fornecedor.md)

Uma nova instância de `Fornecedor` com os mesmos dados.

#### Defined in

[model/Fornecedor.ts:52](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Fornecedor.ts#L52)

***

### getCnpj()

> **getCnpj**(): `string`

Obtém o CNPJ do fornecedor.

#### Returns

`string`

O CNPJ do fornecedor.

#### Defined in

[model/Fornecedor.ts:19](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Fornecedor.ts#L19)

***

### getNome()

> **getNome**(): `string`

Obtém o nome da empresa fornecedora.

#### Returns

`string`

O nome da empresa fornecedora.

#### Defined in

[model/Fornecedor.ts:25](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Fornecedor.ts#L25)

***

### setCnpj()

> **setCnpj**(`cnpj`): `void`

Define o CNPJ do fornecedor.

#### Parameters

• **cnpj**: `string`

O novo CNPJ do fornecedor.

#### Returns

`void`

#### Defined in

[model/Fornecedor.ts:31](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Fornecedor.ts#L31)

***

### setNome()

> **setNome**(`nome`): `void`

Define o nome da empresa fornecedora.

#### Parameters

• **nome**: `string`

O novo nome da empresa fornecedora.

#### Returns

`void`

#### Defined in

[model/Fornecedor.ts:37](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Fornecedor.ts#L37)

***

### toString()

> **toString**(): `string`

Retorna uma representação em string do fornecedor.
Formato da representação retornada: CNPJ: <CNPJ> | Nome da empresa: <NOME>

#### Returns

`string`

Uma string contendo o CNPJ e o nome da empresa.

#### Defined in

[model/Fornecedor.ts:44](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Fornecedor.ts#L44)
