export const secoes = ['Alimentos', 'Limpeza', 'Bebidas']
export const cargos = ['Caixa', 'Gerente', 'Estoquista']
export const marcas = ['Limpazil', 'Crola-coca', 'Omu', 'Dokitos', 'Kauser', 'Fazenda Triste']

export function exibir(array: string[]) {
    for (let i = 0; i < array.length; i++) {
        console.log(i, array[i])
    }
}
