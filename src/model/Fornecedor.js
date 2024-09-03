"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fornecedor = void 0;
var Fornecedor = /** @class */ (function () {
    function Fornecedor(cnpj, nome) {
        this.cnpj = cnpj;
        this.nome = nome;
    }
    Fornecedor.prototype.getCnpj = function () { return this.cnpj; };
    Fornecedor.prototype.getNome = function () { return this.nome; };
    Fornecedor.prototype.setCnpj = function (cnpj) { this.cnpj = cnpj; };
    Fornecedor.prototype.setNome = function (nome) { this.nome = nome; };
    Fornecedor.prototype.toString = function () {
        return "CNPJ: ".concat(this.cnpj, " | Nome da empresa: ").concat(this.nome);
    };
    Fornecedor.prototype.clone = function () {
        return new Fornecedor(this.cnpj, this.nome);
    };
    return Fornecedor;
}());
exports.Fornecedor = Fornecedor;
;
