// Objeto é uma coleção dinâmica de pares chaves/valor
const produto = new Object      // criar um objeto a partir da função construtora new    
produto.nome = 'Cadeira'       
produto['marca do produto'] = 'Generica'       // a partir de um array
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {         // criação literal do objeto
    modelo: 'A4',
    valor: 89000,
    proprietario: {     // objeto dentro de objeto
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    }, 
    condutores: [{
        nome: 'Junior', 
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        //..
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)        //cuidado para acessar atributos de objetos deletados