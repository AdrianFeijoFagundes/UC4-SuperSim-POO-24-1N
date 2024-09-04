[**SuperSim POO 24 1N**](../../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../../modules.md) / [controllers/Mercado](../README.md) / Mercado

# Class: Mercado

## Constructors

### new Mercado()

> **new Mercado**(): [`Mercado`](Mercado.md)

#### Returns

[`Mercado`](Mercado.md)

#### Defined in

[controllers/Mercado.ts:19](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L19)

## Properties

### fornecedores

> **fornecedores**: [`Fornecedor`](../../../model/Fornecedor/classes/Fornecedor.md)[] = `[]`

#### Defined in

[controllers/Mercado.ts:10](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L10)

***

### funcionarios

> **funcionarios**: [`Funcionario`](../../../model/Funcionario/classes/Funcionario.md)[] = `[]`

#### Defined in

[controllers/Mercado.ts:11](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L11)

***

### pedidosFornecedor

> **pedidosFornecedor**: [`PedidoFornecedor`](../../../model/PedidoFornecedor/classes/PedidoFornecedor.md)[] = `[]`

#### Defined in

[controllers/Mercado.ts:14](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L14)

***

### produtos

> **produtos**: [`Produto`](../../../model/Produto/classes/Produto.md)[] = `[]`

#### Defined in

[controllers/Mercado.ts:12](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L12)

***

### vendas

> **vendas**: [`Venda`](../../../model/Venda/classes/Venda.md)[] = `[]`

#### Defined in

[controllers/Mercado.ts:13](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L13)

***

### cargos

> `static` **cargos**: `string`[]

#### Defined in

[controllers/Mercado.ts:17](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L17)

***

### secoes

> `static` **secoes**: `string`[]

#### Defined in

[controllers/Mercado.ts:16](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L16)

## Methods

### adicionarFornecedor()

> **adicionarFornecedor**(`cnpj`, `nomeEmpresa`): `boolean`

#### Parameters

• **cnpj**: `string`

• **nomeEmpresa**: `string`

#### Returns

`boolean`

#### Defined in

[controllers/Mercado.ts:162](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L162)

***

### adicionarFuncionario()

> **adicionarFuncionario**(`cpf`, `nome`, `dataContratacao`, `cargo`): `boolean`

#### Parameters

• **cpf**: `string`

• **nome**: `string`

• **dataContratacao**: `Date`

• **cargo**: `string`

#### Returns

`boolean`

#### Defined in

[controllers/Mercado.ts:113](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L113)

***

### adicionarPedidoFornecedor()

> **adicionarPedidoFornecedor**(`pedido`): `boolean`

#### Parameters

• **pedido**: [`PedidoFornecedor`](../../../model/PedidoFornecedor/classes/PedidoFornecedor.md)

#### Returns

`boolean`

#### Defined in

[controllers/Mercado.ts:206](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L206)

***

### adicionarProduto()

> **adicionarProduto**(`nome`, `marca`, `secao`, `valorCompra`, `valorVenda`, `estoque`, `fornecedor`): `boolean`

#### Parameters

• **nome**: `string`

• **marca**: `string`

• **secao**: `string`

• **valorCompra**: `number`

• **valorVenda**: `number`

• **estoque**: `number`

• **fornecedor**: [`Fornecedor`](../../../model/Fornecedor/classes/Fornecedor.md)

#### Returns

`boolean`

#### Defined in

[controllers/Mercado.ts:37](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L37)

***

### adicionarVenda()

> **adicionarVenda**(`venda`): `boolean`

#### Parameters

• **venda**: [`Venda`](../../../model/Venda/classes/Venda.md)

#### Returns

`boolean`

#### Defined in

[controllers/Mercado.ts:224](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L224)

***

### atualizarFornecedor()

> **atualizarFornecedor**(`indice`, `cnpj`, `nome`): `void`

#### Parameters

• **indice**: `number`

• **cnpj**: `undefined` \| `null` \| `string`

• **nome**: `undefined` \| `null` \| `string`

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:190](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L190)

***

### atualizarFuncionario()

> **atualizarFuncionario**(`indice`, `cargo`): `void`

#### Parameters

• **indice**: `number`

• **cargo**: `undefined` \| `null` \| `string`

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:141](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L141)

***

### atualizarProduto()

> **atualizarProduto**(`indice`, `nome`, `marca`, `secao`, `valorCompra`, `valorVenda`, `estoque`, `fornecedor`): `void`

#### Parameters

• **indice**: `number`

• **nome**: `undefined` \| `null` \| `string`

• **marca**: `undefined` \| `null` \| `string`

• **secao**: `undefined` \| `null` \| `string`

• **valorCompra**: `undefined` \| `null` \| `number`

• **valorVenda**: `undefined` \| `null` \| `number`

• **estoque**: `undefined` \| `null` \| `number`

• **fornecedor**: `undefined` \| `null` \| [`Fornecedor`](../../../model/Fornecedor/classes/Fornecedor.md)

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:74](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L74)

***

### listarFornecedores()

> **listarFornecedores**(): `void`

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:154](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L154)

***

### listarFuncionarios()

> **listarFuncionarios**(): `void`

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:105](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L105)

***

### listarPedidosFornecedor()

> **listarPedidosFornecedor**(): `void`

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:216](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L216)

***

### listarProdutos()

> **listarProdutos**(): `void`

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:29](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L29)

***

### listarVendas()

> **listarVendas**(): `void`

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:234](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L234)

***

### relatorioEstoque()

> **relatorioEstoque**(): `void`

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:242](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L242)

***

### relatorioPedidos()

> **relatorioPedidos**(): `void`

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:300](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L300)

***

### relatorioVendas()

> **relatorioVendas**(): `void`

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:259](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L259)

***

### removerFornecedor()

> **removerFornecedor**(`cnpj`): `boolean`

#### Parameters

• **cnpj**: `string`

#### Returns

`boolean`

#### Defined in

[controllers/Mercado.ts:172](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L172)

***

### removerFuncionario()

> **removerFuncionario**(`cpf`): `boolean`

#### Parameters

• **cpf**: `string`

#### Returns

`boolean`

#### Defined in

[controllers/Mercado.ts:123](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L123)

***

### removerProduto()

> **removerProduto**(`nome`, `marca`): `boolean`

#### Parameters

• **nome**: `string`

• **marca**: `string`

#### Returns

`boolean`

#### Defined in

[controllers/Mercado.ts:55](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/fd56e5542089566257f7fef81fdba8e7257fb018/src/controllers/Mercado.ts#L55)
