"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(cpf, nome, dataContratacao, cargo) {
        this.cpf = cpf;
        this.nome = nome;
        this.dataContratacao = dataContratacao;
        this.cargo = cargo;
    }
    Funcionario.prototype.getCpf = function () { return this.cpf; };
    Funcionario.prototype.getNome = function () { return this.nome; };
    Funcionario.prototype.getCargo = function () { return this.cargo; };
    Funcionario.prototype.getDataContratacao = function () { return this.dataContratacao; };
    Funcionario.prototype.setCargo = function (cargo) { this.cargo = cargo; };
    Funcionario.prototype.clone = function () {
        return new Funcionario(this.cpf, this.nome, this.dataContratacao, this.cargo);
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
;
