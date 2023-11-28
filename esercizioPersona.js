let persona = {
    nome: "Gabriele",
    cognome: "Lucchetti",
    eta: "28",
    saluto: function () {
        return(this.nome + " " + this.cognome + " di eta'" + this.eta + " si presenta a voi!")
    }
}




console.log(persona.saluto())