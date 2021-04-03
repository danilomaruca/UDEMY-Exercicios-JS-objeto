const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))    // keys = retorna somente as chaves dos objetos
console.log(Object.values(pessoa))  // values = retorna somente os valores dos objetos  
console.log(Object.entries(pessoa)) // entries = retorna tanto as chaves quanto os valores dos objetos através de arrays        


Object.entries(pessoa).forEach (e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// Usando destructuring (desestruturando elementos de uma array)
Object.entries(pessoa).forEach (([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Definir a propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)      //não aceita mudança na data de nascimento original
console.log(Object.keys(pessoa))        //propriedade definida de forma mais completa

// Object.assign (ECMScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest, o1, o2)     //contana os atributos de todos os objetos sobrescrevendo pela ultima alteração 

Object.freeze(obj)
obj.c = 1234
console.log(obj)