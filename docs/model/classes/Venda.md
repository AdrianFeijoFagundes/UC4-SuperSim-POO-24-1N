[**SuperSim POO 24 1N**](../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../modules.md) / [model](../README.md) / Venda

# Class: Venda

Representa uma venda no sistema.

## Constructors

### new Venda()

> **new Venda**(`produtos`?): [`Venda`](Venda.md)

Cria uma instância de `Venda`.

#### Parameters

• **produtos?**: `null` \| [`Produto`](Produto.md)[]

Opcionalmente, uma lista de produtos a serem adicionados à venda.

#### Returns

[`Venda`](Venda.md)

#### Defined in

[model/Venda.ts:17](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L17)

## Methods

### adicionarProduto()

> **adicionarProduto**(`produto`): `void`

Adiciona um produto à venda.

#### Parameters

• **produto**: [`Produto`](Produto.md)

O produto a ser adicionado à venda.

#### Returns

`void`

#### Defined in

[model/Venda.ts:86](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L86)

***

### clone()

> **clone**(): [`Venda`](Venda.md)

Cria uma cópia da venda atual.

#### Returns

[`Venda`](Venda.md)

Uma nova instância de `Venda` com os mesmos produtos.

#### Defined in

[model/Venda.ts:165](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L165)

***

### emitirNotaFiscal()

> **emitirNotaFiscal**(`nomeComprador`, `cpfComprador`): `string`

Emite uma nota fiscal da venda.

#### Parameters

• **nomeComprador**: `string`

O nome do comprador.

• **cpfComprador**: `undefined` \| `null` \| `string`

O CPF do comprador, opcional.

#### Returns

`string`

Uma string contendo a nota fiscal da venda.

#### Defined in

[model/Venda.ts:123](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L123)

***

### getProdutos()

> **getProdutos**(): `Map`\<[`Produto`](Produto.md), `number`\>

Obtém o mapa de produtos e suas quantidades na venda.

#### Returns

`Map`\<[`Produto`](Produto.md), `number`\>

Um mapa onde as chaves são produtos e os valores são suas quantidades.

#### Defined in

[model/Venda.ts:27](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L27)

***

### getQuantidade()

> **getQuantidade**(`produto`): `number`

Obtém a quantidade de um produto específico na venda.

#### Parameters

• **produto**: [`Produto`](Produto.md)

O produto cuja quantidade será retornada.

#### Returns

`number`

A quantidade do produto na venda ou `0` se o produto não estiver na venda.

#### Defined in

[model/Venda.ts:35](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L35)

***

### getQuantidadeTotal()

> **getQuantidadeTotal**(): `number`

Obtém a quantidade total de todos os produtos na venda.

#### Returns

`number`

A quantidade total de produtos na venda.

#### Defined in

[model/Venda.ts:43](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L43)

***

### getValorTotal()

> **getValorTotal**(): `number`

Obtém o valor total da venda com base nos produtos e suas quantidades.

#### Returns

`number`

O valor total da venda.

#### Defined in

[model/Venda.ts:53](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L53)

***

### realizarVenda()

> **realizarVenda**(`nomeComprador`, `cpfComprador`): `string`

Realiza a venda, atualizando o estoque dos produtos e removendo produtos com estoque insuficiente.

#### Parameters

• **nomeComprador**: `string`

O nome do comprador.

• **cpfComprador**: `undefined` \| `null` \| `string`

O CPF do comprador, opcional.

#### Returns

`string`

Uma string contendo a nota fiscal da venda.

#### Defined in

[model/Venda.ts:101](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L101)

***

### setProdutos()

> **setProdutos**(`produtos`): `void`

Define os produtos na venda a partir de uma lista de produtos.

#### Parameters

• **produtos**: [`Produto`](Produto.md)[]

Uma lista de produtos a serem adicionados à venda.

#### Returns

`void`

#### Defined in

[model/Venda.ts:65](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L65)

***

### setProdutosPreMapeados()

> **setProdutosPreMapeados**(`produtos`): `void`

Define os produtos na venda a partir de um mapa pré-mapeado.

#### Parameters

• **produtos**: `Map`\<[`Produto`](Produto.md), `number`\>

Um mapa de produtos e suas quantidades a serem adicionados à venda.

#### Returns

`void`

#### Defined in

[model/Venda.ts:78](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L78)

***

### toString()

> **toString**(): `string`

Retorna uma representação em string da venda.

#### Returns

`string`

Uma string contendo os detalhes dos produtos na venda e o preço final.

#### Defined in

[model/Venda.ts:149](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/d7d0623eb0e0fd5a421fd82bec7d9574d7977121/src/model/Venda.ts#L149)
