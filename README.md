# SuperSim-POO-24-1N


dependencias npm:

npm install typescript --save-dev
npm install readline-sync
npm install @types/readline-sync --save-dev
npm install -D typescript @types/node

ENTIDADES

Funcionários
	idFuncionario PK 
	Cpf
	Nome
	Data Contratação
	Cargo	

Fornecedores
	idFornecedor PK
    CNPJ 
    nome da empresa

Produto
	ID	PK
	Nome
	Categoria
	Custo de Compra
	Valor de venda
	Quantidade/Estoque
	Fornecedor ForeignKey
Nota Fiscal
	id
    valorTotal
    metodoDePagamento
    CPF cliente
Venda
	idVenda (ID) PK
	idNotaFiscal ForeignKey
    idProduto ForeignKey
    Quantidade
    valorTotal
PedidoFornecedor
	idPedido	PK
	idNotaFiscal ForeignKey
	idFornecedor	ForeignKey
	idProduto ForeignKey
 	DataDeEntrega
    Quantidade
    valorTotal


Tarefas: 
Gets e sets:
    notaFiscal
    fornecedor
    funcionario
toString