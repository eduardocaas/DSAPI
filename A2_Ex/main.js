/* Construir o objeto retângulo que possui os atributos base e altura, 
este objeto deverá conter um método que calcula a área do retângulo, 
criar no HTML dois campos para que o usuário preencha com os valores para base e altura,
criar um botão que irá mostrar o resultado para o usuário */

class Retangulo {
  _base
  _altura

  constructor (base, altura){
    this._base = base
    this._altura = altura
  }

  area() {
    return this._base * this._altura
  }
}

function calcular(event) {

  var base = document.getElementById('fBase').value
  var altura = document.getElementById('fAltura').value
  var res = document.getElementById('res')

  var retangulo = new Retangulo(base, altura)
  res.innerHTML = retangulo.area()
}