[**SuperSim POO 24 1N**](../../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../../modules.md) / [model/Venda](../README.md) / Venda

# Class: Venda

Representa uma venda no sistema.

## Constructors

### new Venda()

> **new Venda**(`produtos`?): [`Venda`](Venda.md)

Cria uma instância de `Venda`.

#### Parameters

• **produtos?**: `null` \| [`Produto`](../../Produto/classes/Produto.md)[]

Opcionalmente, uma lista de produtos a serem adicionados à venda.

#### Returns

[`Venda`](Venda.md)

#### Defined in

[model/Venda.ts:13](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L13)

## Methods

### adicionarProduto()

> **adicionarProduto**(`produto`): `void`

Adiciona um produto à venda.

#### Parameters

• **produto**: [`Produto`](../../Produto/classes/Produto.md)

O produto a ser adicionado à venda.

#### Returns

`void`

#### Defined in

[model/Venda.ts:82](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L82)

***

### clone()

> **clone**(): [`Venda`](Venda.md)

Cria uma cópia da venda atual.

#### Returns

[`Venda`](Venda.md)

Uma nova instância de `Venda` com os mesmos produtos.

#### Defined in

[model/Venda.ts:161](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L161)

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

[model/Venda.ts:119](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L119)

***

### getProdutos()

> **getProdutos**(): `Map`\<[`Produto`](../../Produto/classes/Produto.md), `number`\>

Obtém o mapa de produtos e suas quantidades na venda.

#### Returns

`Map`\<[`Produto`](../../Produto/classes/Produto.md), `number`\>

Um mapa onde as chaves são produtos e os valores são suas quantidades.

#### Defined in

[model/Venda.ts:23](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L23)

***

### getQuantidade()

> **getQuantidade**(`produto`): `number`

Obtém a quantidade de um produto específico na venda.

#### Parameters

• **produto**: [`Produto`](../../Produto/classes/Produto.md)

O produto cuja quantidade será retornada.

#### Returns

`number`

A quantidade do produto na venda ou `0` se o produto não estiver na venda.

#### Defined in

[model/Venda.ts:31](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L31)

***

### getQuantidadeTotal()

> **getQuantidadeTotal**(): `number`

Obtém a quantidade total de todos os produtos na venda.

#### Returns

`number`

A quantidade total de produtos na venda.

#### Defined in

[model/Venda.ts:39](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L39)

***

### getValorTotal()

> **getValorTotal**(): `number`

Obtém o valor total da venda com base nos produtos e suas quantidades.

#### Returns

`number`

O valor total da venda.

#### Defined in

[model/Venda.ts:49](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L49)

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

[model/Venda.ts:97](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L97)

***

### setProdutos()

> **setProdutos**(`produtos`): `void`

Define os produtos na venda a partir de uma lista de produtos.

#### Parameters

• **produtos**: [`Produto`](../../Produto/classes/Produto.md)[]

Uma lista de produtos a serem adicionados à venda.

#### Returns

`void`

#### Defined in

[model/Venda.ts:61](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L61)

***

### setProdutosPreMapeados()

> **setProdutosPreMapeados**(`produtos`): `void`

Define os produtos na venda a partir de um mapa pré-mapeado.

#### Parameters

• **produtos**: `Map`\<[`Produto`](../../Produto/classes/Produto.md), `number`\>

Um mapa de produtos e suas quantidades a serem adicionados à venda.

#### Returns

`void`

#### Defined in

[model/Venda.ts:74](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L74)

***

### toString()

> **toString**(): `string`

Retorna uma representação em string da venda.

#### Returns

`string`

Uma string contendo os detalhes dos produtos na venda e o preço final.

#### Defined in

[model/Venda.ts:145](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/model/Venda.ts#L145)
