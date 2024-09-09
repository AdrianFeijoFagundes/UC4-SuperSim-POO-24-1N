[**SuperSim POO 24 1N**](../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../modules.md) / [model](../README.md) / Produto

# Class: Produto

Representa um produto no sistema.

## Constructors

### new Produto()

> **new Produto**(`nome`, `marca`, `secao`, `valorCompra`, `valorVenda`, `estoque`, `fornecedor`): [`Produto`](Produto.md)

Cria uma instância de `Produto`.

#### Parameters

• **nome**: `string`

O nome do produto.

• **marca**: `string`

A marca do produto.

• **secao**: `string`

A seção onde o produto está localizado.

• **valorCompra**: `number`

O valor de compra do produto.

• **valorVenda**: `number`

O valor de venda do produto.

• **estoque**: `number`

A quantidade em estoque do produto.

• **fornecedor**: [`Fornecedor`](Fornecedor.md)

O fornecedor do produto.

#### Returns

[`Produto`](Produto.md)

#### Defined in

[model/Produto.ts:21](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L21)

## Methods

### clone()

> **clone**(): [`Produto`](Produto.md)

Cria uma cópia do produto atual.

#### Returns

[`Produto`](Produto.md)

Uma nova instância de `Produto` com os mesmos dados e um clone do fornecedor.

#### Defined in

[model/Produto.ts:120](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L120)

***

### getEstoque()

> **getEstoque**(): `number`

Obtém a quantidade em estoque do produto.

#### Returns

`number`

A quantidade em estoque do produto.

#### Defined in

[model/Produto.ts:60](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L60)

***

### getFornecedor()

> **getFornecedor**(): [`Fornecedor`](Fornecedor.md)

Obtém o fornecedor do produto.

#### Returns

[`Fornecedor`](Fornecedor.md)

O fornecedor do produto.

#### Defined in

[model/Produto.ts:65](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L65)

***

### getMarca()

> **getMarca**(): `string`

Obtém a marca do produto.

#### Returns

`string`

A marca do produto.

#### Defined in

[model/Produto.ts:40](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L40)

***

### getNome()

> **getNome**(): `string`

Obtém o nome do produto.

#### Returns

`string`

O nome do produto.

#### Defined in

[model/Produto.ts:35](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L35)

***

### getSecao()

> **getSecao**(): `string`

Obtém a seção onde o produto está localizado.

#### Returns

`string`

A seção do produto.

#### Defined in

[model/Produto.ts:45](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L45)

***

### getValorCompra()

> **getValorCompra**(): `number`

Obtém o valor de compra do produto.

#### Returns

`number`

O valor de compra do produto.

#### Defined in

[model/Produto.ts:50](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L50)

***

### getValorVenda()

> **getValorVenda**(): `number`

Obtém o valor de venda do produto.

#### Returns

`number`

O valor de venda do produto.

#### Defined in

[model/Produto.ts:55](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L55)

***

### setEstoque()

> **setEstoque**(`estoque`): `void`

Define a quantidade em estoque do produto.

#### Parameters

• **estoque**: `number`

A nova quantidade em estoque do produto.

#### Returns

`void`

#### Defined in

[model/Produto.ts:97](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L97)

***

### setFornecedor()

> **setFornecedor**(`fornecedor`): `void`

Define o fornecedor do produto.

#### Parameters

• **fornecedor**: [`Fornecedor`](Fornecedor.md)

O novo fornecedor do produto.

#### Returns

`void`

#### Defined in

[model/Produto.ts:102](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L102)

***

### setMarca()

> **setMarca**(`marca`): `void`

Define a marca do produto.

#### Parameters

• **marca**: `string`

A nova marca do produto.

#### Returns

`void`

#### Defined in

[model/Produto.ts:76](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L76)

***

### setNome()

> **setNome**(`nome`): `void`

Define o nome do produto.

#### Parameters

• **nome**: `string`

O novo nome do produto.

#### Returns

`void`

#### Defined in

[model/Produto.ts:71](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L71)

***

### setSecao()

> **setSecao**(`secao`): `void`

Define a seção onde o produto está localizado.

#### Parameters

• **secao**: `string`

A nova seção do produto.

#### Returns

`void`

#### Defined in

[model/Produto.ts:81](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L81)

***

### setValorCompra()

> **setValorCompra**(`valorCompra`): `void`

Define o valor de compra do produto.

#### Parameters

• **valorCompra**: `number`

O novo valor de compra do produto.

#### Returns

`void`

#### Defined in

[model/Produto.ts:86](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L86)

***

### setValorVenda()

> **setValorVenda**(`valorVenda`): `void`

Define o valor de venda do produto.

#### Parameters

• **valorVenda**: `number`

O novo valor de venda do produto.

#### Returns

`void`

#### Defined in

[model/Produto.ts:92](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L92)

***

### toString()

> **toString**(): `string`

Retorna uma representação em string do produto.

#### Returns

`string`

Uma string contendo as informações do produto.

#### Defined in

[model/Produto.ts:108](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Produto.ts#L108)
