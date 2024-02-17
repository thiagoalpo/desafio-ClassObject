class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
  
    atacar(){
        let ataque
        if (this.tipo === "mago") {
            ataque = "magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
  }
  
let mago = new Heroi("Harry Potter", 100, "mago")
mago.atacar()
  
let guerreiro = new Heroi("Rambo", 40, "guerreiro")
guerreiro.atacar()
  
let monge = new Heroi("Dalai Lama", 50, "monge");
monge.atacar()
  
let ninja = new Heroi("Tartaruga Ninja", 25, "ninja");
ninja.atacar()