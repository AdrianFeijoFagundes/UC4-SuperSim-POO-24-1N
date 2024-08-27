import { Funcionario } from "./Funcionario";
import { NotaFiscal } from "./NotaFiscal";
import { Produto } from "./Produto";

export class Venda {
    private id: number;
    private notaFiscal: NotaFiscal
    private responsavel: Funcionario;
    private produtos: Produto[];
    private valorTotal: number;
    private metodoDePagamento: string;
    private cpfCliente: string;

    constructor(id: number, notaFiscal: NotaFiscal, responsavel: Funcionario, produtos: Produto[], valorTotal: number, metodoDePagamento: string, cpfCliente: string) {
        this.id = id
        this.notaFiscal = notaFiscal        
        this.responsavel = responsavel
        this.produtos = produtos
        this.valorTotal = valorTotal
        this.metodoDePagamento = metodoDePagamento
        this.cpfCliente = cpfCliente
    }
}