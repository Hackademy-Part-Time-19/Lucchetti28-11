


let agenda = {
    nome: "Agenda supernatural",
    proprietario: "Gabriele",
    contatti: [{
        index:1,
        nome: "Ilaria",
        numeroTelefono: "3812312312",
    },
    {   
        index:2,
        nome: "Stefania",
        numeroTelefono: "3812312312",
    },
    {   index:3,
        nome: "Giovanni",
        numeroTelefono: "3812312312",
    },
    {   index:4,
        nome: "Benedetta",
        numeroTelefono: "3812312312",
    },
    ],


    aggiungiContatti: function (nuovoContatto) {
        this.contatti.push(nuovoContatto)
    },

    mostraContatti: function () {
        this.contatti.forEach(contatto => { console.log("Il mio nome e' " + contatto.nome + " il mio cellulare e' " + contatto.numeroTelefono)})
    },

    mostraSingoloContatto:function(nomeContatto){
       let contatto= this.contatti.find(contatto => contatto.nome === nomeContatto);
        if (contatto) {console.log("il mio nome e' " + contatto.nome + " e il mio numero e' " + contatto.numeroTelefono)}
        else { console.log("contatto non trovato")}
    },

   rimuoviContatto: function (contatto) {

        this.contatti.splice(contatto-1,1)

    },

    modificaContattoEsistente: function(contattoDaModificare,nuovoContatto){
        let contatto= this.contatti.find(contatto => contatto.nome === contattoDaModificare);
        if (contatto) {
            contatto.nome=nuovoContatto

        }


}
}


agenda.modificaContattoEsistente("Giovanni","Isabella")


console.log(agenda.contatti)

