// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}       // constante não permite atribuir novo objetos
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}          // não é possível atribuir novo valor a constante

Object.freeze(pessoa)             // objeto congelado, não permite alteração ou adcionar atributos

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})       // A referência e o objeto criado não alterados
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
