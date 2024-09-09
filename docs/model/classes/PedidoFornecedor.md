[**SuperSim POO 24 1N**](../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../modules.md) / [model](../README.md) / PedidoFornecedor

# Class: PedidoFornecedor

Representa um pedido de fornecedor no sistema.

## Constructors

### new PedidoFornecedor()

> **new PedidoFornecedor**(`produtos`?, `fornecedor`?): [`PedidoFornecedor`](PedidoFornecedor.md)

Cria uma instância de `PedidoFornecedor`.

#### Parameters

• **produtos?**: [`Produto`](Produto.md)[]

Opcionalmente, uma lista de produtos a serem adicionados ao pedido.

• **fornecedor?**: [`Fornecedor`](Fornecedor.md)

Opcionalmente, o fornecedor associado ao pedido.

#### Returns

[`PedidoFornecedor`](PedidoFornecedor.md)

#### Defined in

[model/PedidoFornecedor.ts:20](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L20)

## Methods

### adicionarProduto()

> **adicionarProduto**(`produto`): `boolean`

Adiciona um produto ao pedido.

#### Parameters

• **produto**: [`Produto`](Produto.md)

O produto a ser adicionado ao pedido.

#### Returns

`boolean`

`true` se o produto foi adicionado com sucesso; caso contrário, `false`.

#### Defined in

[model/PedidoFornecedor.ts:97](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L97)

***

### clone()

> **clone**(): [`PedidoFornecedor`](PedidoFornecedor.md)

Cria uma cópia do pedido atual.

#### Returns

[`PedidoFornecedor`](PedidoFornecedor.md)

Uma nova instância de `PedidoFornecedor` com os mesmos dados.

#### Defined in

[model/PedidoFornecedor.ts:145](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L145)

***

### getFornecedor()

> **getFornecedor**(): `undefined` \| [`Fornecedor`](Fornecedor.md)

Obtém o fornecedor associado ao pedido.

#### Returns

`undefined` \| [`Fornecedor`](Fornecedor.md)

O fornecedor associado ao pedido ou `undefined` se não estiver definido.

#### Defined in

[model/PedidoFornecedor.ts:30](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L30)

***

### getProdutos()

> **getProdutos**(): `Map`\<[`Produto`](Produto.md), `number`\>

Obtém o mapa de produtos e suas quantidades no pedido.

#### Returns

`Map`\<[`Produto`](Produto.md), `number`\>

Um mapa onde as chaves são produtos e os valores são suas quantidades.

#### Defined in

[model/PedidoFornecedor.ts:37](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L37)

***

### getQuantidade()

> **getQuantidade**(`produto`): `number`

Obtém a quantidade de um produto específico no pedido.

#### Parameters

• **produto**: [`Produto`](Produto.md)

O produto cuja quantidade será retornada.

#### Returns

`number`

A quantidade do produto no pedido ou `0` se o produto não estiver no pedido.

#### Defined in

[model/PedidoFornecedor.ts:45](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L45)

***

### getQuantidadeTotal()

> **getQuantidadeTotal**(): `number`

Obtém a quantidade total de todos os produtos no pedido.

#### Returns

`number`

A quantidade total de produtos no pedido.

#### Defined in

[model/PedidoFornecedor.ts:52](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L52)

***

### getValorTotal()

> **getValorTotal**(): `number`

Obtém o valor total do pedido com base nos produtos e suas quantidades.

#### Returns

`number`

O valor total do pedido.

#### Defined in

[model/PedidoFornecedor.ts:62](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L62)

***

### realizarPedido()

> **realizarPedido**(): `void`

Realiza o pedido, atualizando o estoque dos produtos com base nas quantidades do pedido.

#### Returns

`void`

#### Defined in

[model/PedidoFornecedor.ts:117](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L117)

***

### setProdutos()

> **setProdutos**(`produtos`): `void`

Define os produtos no pedido a partir de uma lista de produtos.

#### Parameters

• **produtos**: [`Produto`](Produto.md)[]

Uma lista de produtos a serem adicionados ao pedido.

#### Returns

`void`

#### Defined in

[model/PedidoFornecedor.ts:75](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L75)

***

### setProdutosPreMapeados()

> **setProdutosPreMapeados**(`produtos`): `void`

Define os produtos no pedido a partir de um mapa pré-mapeado.

#### Parameters

• **produtos**: `Map`\<[`Produto`](Produto.md), `number`\>

Um mapa de produtos e suas quantidades a serem adicionados ao pedido.

#### Returns

`void`

#### Defined in

[model/PedidoFornecedor.ts:88](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L88)

***

### toString()

> **toString**(): `string`

Retorna uma representação em string do pedido.

#### Returns

`string`

Uma string contendo os detalhes dos produtos no pedido e o preço final.

#### Defined in

[model/PedidoFornecedor.ts:128](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/PedidoFornecedor.ts#L128)
