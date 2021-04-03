//Métodos que leem e alteram atributos privados (variável)
const sequencia = {
    _valor: 1,  // convenção (variável pretendida ser acessada apenas internamente dentro do objeto)
    get valor() { return this._valor++}, 
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900                           //não permite atribuir valor menor
console.log(sequencia.valor, sequencia.valor)