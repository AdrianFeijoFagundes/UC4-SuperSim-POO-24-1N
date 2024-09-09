[**SuperSim POO 24 1N**](../../../README.md) • **Docs**

***

[SuperSim POO 24 1N](../../../modules.md) / [controllers/Mercado](../README.md) / Mercado

# Class: Mercado

Representa o sistema de gerenciamento de um mercado, incluindo produtos, funcionários, fornecedores, vendas e pedidos de fornecedores.
Oferece métodos para adicionar, listar, atualizar e remover itens em cada uma dessas categorias, bem como para gerar relatórios.

## Constructors

### new Mercado()

> **new Mercado**(): [`Mercado`](Mercado.md)

Construtor da classe Mercado. Inicializa uma nova instância do mercado.

#### Returns

[`Mercado`](Mercado.md)

#### Defined in

[controllers/Mercado.ts:31](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L31)

## Properties

### fornecedores

> **fornecedores**: [`Fornecedor`](../../../model/Fornecedor/classes/Fornecedor.md)[] = `[]`

Lista de fornecedores cadastrados no mercado.

#### Defined in

[controllers/Mercado.ts:15](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L15)

***

### funcionarios

> **funcionarios**: [`Funcionario`](../../../model/Funcionario/classes/Funcionario.md)[] = `[]`

Lista de funcionários cadastrados no mercado.

#### Defined in

[controllers/Mercado.ts:17](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L17)

***

### pedidosFornecedor

> **pedidosFornecedor**: [`PedidoFornecedor`](../../../model/PedidoFornecedor/classes/PedidoFornecedor.md)[] = `[]`

Lista de pedidos realizados aos fornecedores.

#### Defined in

[controllers/Mercado.ts:23](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L23)

***

### produtos

> **produtos**: [`Produto`](../../../model/Produto/classes/Produto.md)[] = `[]`

Lista de produtos cadastrados no mercado.

#### Defined in

[controllers/Mercado.ts:19](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L19)

***

### vendas

> **vendas**: [`Venda`](../../../model/Venda/classes/Venda.md)[] = `[]`

Lista de vendas realizadas no mercado.

#### Defined in

[controllers/Mercado.ts:21](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L21)

***

### cargos

> `static` **cargos**: `string`[]

Cargos disponíveis para funcionários no mercado.

#### Defined in

[controllers/Mercado.ts:28](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L28)

***

### secoes

> `static` **secoes**: `string`[]

Seções disponíveis para produtos no mercado.

#### Defined in

[controllers/Mercado.ts:26](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L26)

## Methods

### adicionarFornecedor()

> **adicionarFornecedor**(`cnpj`, `nomeEmpresa`): `boolean`

Adiciona um novo fornecedor ao mercado.

#### Parameters

• **cnpj**: `string`

CNPJ do fornecedor.

• **nomeEmpresa**: `string`

Nome da empresa fornecedora.

#### Returns

`boolean`

Retorna true se o fornecedor for adicionado com sucesso; caso contrário, retorna false.

#### Defined in

[controllers/Mercado.ts:249](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L249)

***

### adicionarFuncionario()

> **adicionarFuncionario**(`cpf`, `nome`, `dataContratacao`, `cargo`): `boolean`

Adiciona um novo funcionário ao mercado.

#### Parameters

• **cpf**: `string`

CPF do funcionário.

• **nome**: `string`

Nome do funcionário.

• **dataContratacao**: `Date`

Data de contratação do funcionário.

• **cargo**: `string`

Cargo do funcionário.

#### Returns

`boolean`

Retorna true se o funcionário for adicionado com sucesso; caso contrário, retorna false.

#### Defined in

[controllers/Mercado.ts:178](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L178)

***

### adicionarPedidoFornecedor()

> **adicionarPedidoFornecedor**(`pedido`): `boolean`

Adiciona um novo pedido de fornecedor ao mercado.

#### Parameters

• **pedido**: [`PedidoFornecedor`](../../../model/PedidoFornecedor/classes/PedidoFornecedor.md)

Pedido de fornecedor a ser adicionado.

#### Returns

`boolean`

Retorna true se o pedido for adicionado com sucesso; caso contrário, retorna false.

#### Defined in

[controllers/Mercado.ts:309](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L309)

***

### adicionarProduto()

> **adicionarProduto**(`nome`, `marca`, `secao`, `valorCompra`, `valorVenda`, `estoque`, `fornecedor`): `boolean`

Adiciona um novo produto ao mercado.

#### Parameters

• **nome**: `string`

Nome do produto.

• **marca**: `string`

Marca do produto.

• **secao**: `string`

Seção onde o produto está localizado.

• **valorCompra**: `number`

Valor de compra do produto.

• **valorVenda**: `number`

Valor de venda do produto.

• **estoque**: `number`

Quantidade de itens em estoque.

• **fornecedor**: [`Fornecedor`](../../../model/Fornecedor/classes/Fornecedor.md)

Fornecedor do produto.

#### Returns

`boolean`

Retorna true se o produto for adicionado com sucesso; caso contrário, retorna false.

#### Defined in

[controllers/Mercado.ts:72](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L72)

***

### adicionarVenda()

> **adicionarVenda**(`venda`): `boolean`

Adiciona uma nova venda ao mercado.

#### Parameters

• **venda**: [`Venda`](../../../model/Venda/classes/Venda.md)

Venda a ser adicionada.

#### Returns

`boolean`

Retorna true se a venda for adicionada com sucesso; caso contrário, retorna false.

#### Defined in

[controllers/Mercado.ts:336](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L336)

***

### atualizarFornecedor()

> **atualizarFornecedor**(`indice`, `cnpj`, `nome`): `void`

Atualiza as informações de um fornecedor existente.

#### Parameters

• **indice**: `number`

Índice do fornecedor a ser atualizado.

• **cnpj**: `undefined` \| `null` \| `string`

Novo CNPJ do fornecedor (opcional).

• **nome**: `undefined` \| `null` \| `string`

Novo nome da empresa fornecedora (opcional).

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:288](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L288)

***

### atualizarFuncionario()

> **atualizarFuncionario**(`indice`, `cargo`): `void`

Atualiza o cargo de um funcionário existente.

#### Parameters

• **indice**: `number`

Índice do funcionário a ser atualizado.

• **cargo**: `undefined` \| `null` \| `string`

Novo cargo do funcionário (opcional).

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:217](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L217)

***

### atualizarProduto()

> **atualizarProduto**(`indice`, `nome`, `marca`, `secao`, `valorCompra`, `valorVenda`, `estoque`, `fornecedor`): `void`

Atualiza as informações de um produto existente.

#### Parameters

• **indice**: `number`

Índice do produto a ser atualizado.

• **nome**: `undefined` \| `null` \| `string`

Novo nome do produto (opcional).

• **marca**: `undefined` \| `null` \| `string`

Nova marca do produto (opcional).

• **secao**: `undefined` \| `null` \| `string`

Nova seção do produto (opcional).

• **valorCompra**: `undefined` \| `null` \| `number`

Novo valor de compra do produto (opcional).

• **valorVenda**: `undefined` \| `null` \| `number`

Novo valor de venda do produto (opcional).

• **estoque**: `undefined` \| `null` \| `number`

Novo valor de estoque do produto (opcional).

• **fornecedor**: `undefined` \| `null` \| [`Fornecedor`](../../../model/Fornecedor/classes/Fornecedor.md)

Novo fornecedor do produto (opcional).

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:126](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L126)

***

### listarFornecedores()

> **listarFornecedores**(): `void`

Lista todos os fornecedores cadastrados no mercado.
Se não houver fornecedores, exibe uma mensagem de aviso.

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:235](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L235)

***

### listarFuncionarios()

> **listarFuncionarios**(): `void`

Lista todos os funcionários cadastrados no mercado.
Se não houver funcionários, exibe uma mensagem de aviso.

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:161](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L161)

***

### listarPedidosFornecedor()

> **listarPedidosFornecedor**(): `void`

Lista todos os pedidos de fornecedores realizados.
Se não houver pedidos, exibe uma mensagem de aviso.

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:323](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L323)

***

### listarProdutos()

> **listarProdutos**(): `void`

Lista todos os produtos cadastrados no mercado.
Se não houver produtos, exibe uma mensagem de aviso.

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:53](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L53)

***

### listarVendas()

> **listarVendas**(): `void`

Lista todas as vendas realizadas no mercado.
Se não houver vendas, exibe uma mensagem de aviso.

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:351](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L351)

***

### relatorioEstoque()

> **relatorioEstoque**(): `void`

Gera um relatório do estoque atual, exibindo informações sobre cada produto.
Se não houver produtos, exibe uma mensagem de aviso.

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:363](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L363)

***

### relatorioPedidos()

> **relatorioPedidos**(): `void`

Gera um relatório detalhado dos pedidos realizados aos fornecedores.
Exibe o custo total de cada pedido e o custo total acumulado.
Se não houver pedidos, exibe uma mensagem de aviso.

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:432](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L432)

***

### relatorioVendas()

> **relatorioVendas**(): `void`

Gera um relatório detalhado das vendas realizadas.
Exibe o total de lucro obtido em cada venda e o lucro total acumulado.
Se não houver vendas, exibe uma mensagem de aviso.

#### Returns

`void`

#### Defined in

[controllers/Mercado.ts:387](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L387)

***

### removerFornecedor()

> **removerFornecedor**(`cnpj`): `boolean`

Remove um fornecedor do mercado com base no CNPJ fornecido.

#### Parameters

• **cnpj**: `string`

CNPJ do fornecedor a ser removido.

#### Returns

`boolean`

Retorna true se o fornecedor for removido com sucesso; caso contrário, retorna false.

#### Defined in

[controllers/Mercado.ts:264](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L264)

***

### removerFuncionario()

> **removerFuncionario**(`cpf`): `boolean`

Remove um funcionário do mercado com base no CPF fornecido.

#### Parameters

• **cpf**: `string`

CPF do funcionário a ser removido.

#### Returns

`boolean`

Retorna true se o funcionário for removido com sucesso; caso contrário, retorna false.

#### Defined in

[controllers/Mercado.ts:193](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L193)

***

### removerProduto()

> **removerProduto**(`nome`, `marca`): `boolean`

Remove um produto do mercado com base no nome e marca fornecidos.

#### Parameters

• **nome**: `string`

Nome do produto a ser removido.

• **marca**: `string`

Marca do produto a ser removido.

#### Returns

`boolean`

Retorna true se o produto for removido com sucesso; caso contrário, retorna false.

#### Defined in

[controllers/Mercado.ts:96](https://github.com/AdrianFeijoFagundes/SuperSim-POO-24-1N/blob/b30de4c87eeff268a1622cc54394a69b4c60173b/src/controllers/Mercado.ts#L96)
