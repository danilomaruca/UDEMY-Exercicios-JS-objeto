// Herança é o principio que permite receber atributos e comportamentos do "pai"
// Priorize a composição de objetos em vez de herança
const ferrari = {
    modelo: 'F40', 
    velMax: 324
}

const volvo = {
    modelo: 'V40', 
    velMax: 200
}

console.log(ferrari.__proto__)    // Acessa o objeto "pai" (procura em toda a cadeia de protótipos)
console.log(ferrari.__proto__ === Object.prototype)     // Acessa o protótipo de mais alto nível
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)     // Não há protótipos acima

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

// Um objeto em  JS tem uma referência para seu protótipo
/* A partir da referência para um protótipo, há referência para outro objeto com atributos e comportamentos
procurados em toda a cadeia de protótipos */ 