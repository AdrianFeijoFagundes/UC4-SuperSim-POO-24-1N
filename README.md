# SuperSim-POO-24-1N

## Comandos para BUILD
1. Para a primeira build, instale as dependências NPM do projeto:
```bash
npm install typescript --save-dev
npm install @types/readline-sync --save-dev
npm install -Dtypescript @types/nodenpm
npm install readline-sync
```
2. Transpile o projeto para javascript:
```bash
npx tsc src/index.ts
```
3. Para executar, use:
```bash
node src/index.js
```

## ENTIDADES
### Funcionários
1. idFuncionario PK 
2. CPF
3. Nome
4. Data Contratação
5. Cargo	
### Fornecedores
1. IdFornecedor PK
2. CNPJ 
3. Nome da empresa

### Produto
1. ID PK
2. Nome
3. Categoria
4. Custo de Compra
5. Valor de venda
6. Quantidade/Estoque
7. Fornecedor ForeignKey

### Nota Fiscal
1. Id
2. ValorTotal
3. MetodoDePagamento
4. CPF cliente
### Venda
1. IdVenda (ID) PK
2. IdNotaFiscal ForeignKey
3. IdProduto ForeignKey
4. Quantidade
5. ValorTotal
### PedidoFornecedor
1. IdPedido PK
2. IdNotaFiscal ForeignKey
3. IdFornecedor	ForeignKey
4. IdProduto ForeignKey
5. DataDeEntrega
6. Quantidade
7. ValorTotal

## Tarefas: 
### Gets e sets:
1. notaFiscal
2. fornecedor
3. funcionario
	4. toString
