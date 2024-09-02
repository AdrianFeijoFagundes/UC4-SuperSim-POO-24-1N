import { Fornecedor } from './Fornecedor';
import { Produto    } from './Produto';

export class CompraFornecedor {
    private produtos: Array<Produto> = [];
    private valorTotal: number = 0;

    public constructor(idCompra: number, fornecedorResponsavel: Fornecedor) {}

    public addProdutos(produto: Produto): void {
        try {
            this.produtos.push(produto);
            this.valorTotal += produto.getValorVenda();
        } catch(error) {
            console.error(`addProdutos(): src/model/CompraFornecedor.ts: 15: Um erro ocorreu: ${error}`);
        }
    }
};