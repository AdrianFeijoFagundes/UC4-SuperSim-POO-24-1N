[**SuperSim POO 24 1N**](../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../modules.md) / [model](../README.md) / Fornecedor

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

[model/Fornecedor.ts:14](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Fornecedor.ts#L14)

## Methods

### clone()

> **clone**(): [`Fornecedor`](Fornecedor.md)

Cria uma cópia do fornecedor atual. Usada para evitar referenciação ao objeto original.

#### Returns

[`Fornecedor`](Fornecedor.md)

Uma nova instância de `Fornecedor` com os mesmos dados.

#### Defined in

[model/Fornecedor.ts:56](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Fornecedor.ts#L56)

***

### getCnpj()

> **getCnpj**(): `string`

Obtém o CNPJ do fornecedor.

#### Returns

`string`

O CNPJ do fornecedor.

#### Defined in

[model/Fornecedor.ts:23](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Fornecedor.ts#L23)

***

### getNome()

> **getNome**(): `string`

Obtém o nome da empresa fornecedora.

#### Returns

`string`

O nome da empresa fornecedora.

#### Defined in

[model/Fornecedor.ts:29](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Fornecedor.ts#L29)

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

[model/Fornecedor.ts:35](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Fornecedor.ts#L35)

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

[model/Fornecedor.ts:41](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Fornecedor.ts#L41)

***

### toString()

> **toString**(): `string`

Retorna uma representação em string do fornecedor.
Formato da representação retornada: CNPJ: <CNPJ> | Nome da empresa: <NOME>

#### Returns

`string`

Uma string contendo o CNPJ e o nome da empresa.

#### Defined in

[model/Fornecedor.ts:48](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Fornecedor.ts#L48)
