[**SuperSim POO 24 1N**](../../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../../modules.md) / [model/Produto](../README.md) / Produto

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

• **fornecedor**: [`Fornecedor`](../../Fornecedor/classes/Fornecedor.md)

O fornecedor do produto.

#### Returns

[`Produto`](Produto.md)

#### Defined in

[model/Produto.ts:17](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L17)

## Methods

### clone()

> **clone**(): [`Produto`](Produto.md)

Cria uma cópia do produto atual.

#### Returns

[`Produto`](Produto.md)

Uma nova instância de `Produto` com os mesmos dados e um clone do fornecedor.

#### Defined in

[model/Produto.ts:116](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L116)

***

### getEstoque()

> **getEstoque**(): `number`

Obtém a quantidade em estoque do produto.

#### Returns

`number`

A quantidade em estoque do produto.

#### Defined in

[model/Produto.ts:56](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L56)

***

### getFornecedor()

> **getFornecedor**(): [`Fornecedor`](../../Fornecedor/classes/Fornecedor.md)

Obtém o fornecedor do produto.

#### Returns

[`Fornecedor`](../../Fornecedor/classes/Fornecedor.md)

O fornecedor do produto.

#### Defined in

[model/Produto.ts:61](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L61)

***

### getMarca()

> **getMarca**(): `string`

Obtém a marca do produto.

#### Returns

`string`

A marca do produto.

#### Defined in

[model/Produto.ts:36](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L36)

***

### getNome()

> **getNome**(): `string`

Obtém o nome do produto.

#### Returns

`string`

O nome do produto.

#### Defined in

[model/Produto.ts:31](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L31)

***

### getSecao()

> **getSecao**(): `string`

Obtém a seção onde o produto está localizado.

#### Returns

`string`

A seção do produto.

#### Defined in

[model/Produto.ts:41](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L41)

***

### getValorCompra()

> **getValorCompra**(): `number`

Obtém o valor de compra do produto.

#### Returns

`number`

O valor de compra do produto.

#### Defined in

[model/Produto.ts:46](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L46)

***

### getValorVenda()

> **getValorVenda**(): `number`

Obtém o valor de venda do produto.

#### Returns

`number`

O valor de venda do produto.

#### Defined in

[model/Produto.ts:51](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L51)

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

[model/Produto.ts:93](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L93)

***

### setFornecedor()

> **setFornecedor**(`fornecedor`): `void`

Define o fornecedor do produto.

#### Parameters

• **fornecedor**: [`Fornecedor`](../../Fornecedor/classes/Fornecedor.md)

O novo fornecedor do produto.

#### Returns

`void`

#### Defined in

[model/Produto.ts:98](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L98)

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

[model/Produto.ts:72](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L72)

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

[model/Produto.ts:67](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L67)

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

[model/Produto.ts:77](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L77)

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

[model/Produto.ts:82](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L82)

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

[model/Produto.ts:88](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L88)

***

### toString()

> **toString**(): `string`

Retorna uma representação em string do produto.

#### Returns

`string`

Uma string contendo as informações do produto.

#### Defined in

[model/Produto.ts:104](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/Produto.ts#L104)
