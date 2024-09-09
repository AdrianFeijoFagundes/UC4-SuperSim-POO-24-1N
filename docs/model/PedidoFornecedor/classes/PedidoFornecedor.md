[**SuperSim POO 24 1N**](../../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../../modules.md) / [model/PedidoFornecedor](../README.md) / PedidoFornecedor

# Class: PedidoFornecedor

Representa um pedido de fornecedor no sistema.

## Constructors

### new PedidoFornecedor()

> **new PedidoFornecedor**(`produtos`?, `fornecedor`?): [`PedidoFornecedor`](PedidoFornecedor.md)

Cria uma instância de `PedidoFornecedor`.

#### Parameters

• **produtos?**: [`Produto`](../../Produto/classes/Produto.md)[]

Opcionalmente, uma lista de produtos a serem adicionados ao pedido.

• **fornecedor?**: [`Fornecedor`](../../Fornecedor/classes/Fornecedor.md)

Opcionalmente, o fornecedor associado ao pedido.

#### Returns

[`PedidoFornecedor`](PedidoFornecedor.md)

#### Defined in

[model/PedidoFornecedor.ts:16](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L16)

## Methods

### adicionarProduto()

> **adicionarProduto**(`produto`): `boolean`

Adiciona um produto ao pedido.

#### Parameters

• **produto**: [`Produto`](../../Produto/classes/Produto.md)

O produto a ser adicionado ao pedido.

#### Returns

`boolean`

`true` se o produto foi adicionado com sucesso; caso contrário, `false`.

#### Defined in

[model/PedidoFornecedor.ts:93](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L93)

***

### clone()

> **clone**(): [`PedidoFornecedor`](PedidoFornecedor.md)

Cria uma cópia do pedido atual.

#### Returns

[`PedidoFornecedor`](PedidoFornecedor.md)

Uma nova instância de `PedidoFornecedor` com os mesmos dados.

#### Defined in

[model/PedidoFornecedor.ts:141](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L141)

***

### getFornecedor()

> **getFornecedor**(): `undefined` \| [`Fornecedor`](../../Fornecedor/classes/Fornecedor.md)

Obtém o fornecedor associado ao pedido.

#### Returns

`undefined` \| [`Fornecedor`](../../Fornecedor/classes/Fornecedor.md)

O fornecedor associado ao pedido ou `undefined` se não estiver definido.

#### Defined in

[model/PedidoFornecedor.ts:26](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L26)

***

### getProdutos()

> **getProdutos**(): `Map`\<[`Produto`](../../Produto/classes/Produto.md), `number`\>

Obtém o mapa de produtos e suas quantidades no pedido.

#### Returns

`Map`\<[`Produto`](../../Produto/classes/Produto.md), `number`\>

Um mapa onde as chaves são produtos e os valores são suas quantidades.

#### Defined in

[model/PedidoFornecedor.ts:33](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L33)

***

### getQuantidade()

> **getQuantidade**(`produto`): `number`

Obtém a quantidade de um produto específico no pedido.

#### Parameters

• **produto**: [`Produto`](../../Produto/classes/Produto.md)

O produto cuja quantidade será retornada.

#### Returns

`number`

A quantidade do produto no pedido ou `0` se o produto não estiver no pedido.

#### Defined in

[model/PedidoFornecedor.ts:41](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L41)

***

### getQuantidadeTotal()

> **getQuantidadeTotal**(): `number`

Obtém a quantidade total de todos os produtos no pedido.

#### Returns

`number`

A quantidade total de produtos no pedido.

#### Defined in

[model/PedidoFornecedor.ts:48](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L48)

***

### getValorTotal()

> **getValorTotal**(): `number`

Obtém o valor total do pedido com base nos produtos e suas quantidades.

#### Returns

`number`

O valor total do pedido.

#### Defined in

[model/PedidoFornecedor.ts:58](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L58)

***

### realizarPedido()

> **realizarPedido**(): `void`

Realiza o pedido, atualizando o estoque dos produtos com base nas quantidades do pedido.

#### Returns

`void`

#### Defined in

[model/PedidoFornecedor.ts:113](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L113)

***

### setProdutos()

> **setProdutos**(`produtos`): `void`

Define os produtos no pedido a partir de uma lista de produtos.

#### Parameters

• **produtos**: [`Produto`](../../Produto/classes/Produto.md)[]

Uma lista de produtos a serem adicionados ao pedido.

#### Returns

`void`

#### Defined in

[model/PedidoFornecedor.ts:71](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L71)

***

### setProdutosPreMapeados()

> **setProdutosPreMapeados**(`produtos`): `void`

Define os produtos no pedido a partir de um mapa pré-mapeado.

#### Parameters

• **produtos**: `Map`\<[`Produto`](../../Produto/classes/Produto.md), `number`\>

Um mapa de produtos e suas quantidades a serem adicionados ao pedido.

#### Returns

`void`

#### Defined in

[model/PedidoFornecedor.ts:84](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L84)

***

### toString()

> **toString**(): `string`

Retorna uma representação em string do pedido.

#### Returns

`string`

Uma string contendo os detalhes dos produtos no pedido e o preço final.

#### Defined in

[model/PedidoFornecedor.ts:124](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/model/PedidoFornecedor.ts#L124)
