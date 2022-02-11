//prelevo il pulsante per aggiungere task
//window.addEventListener("load",init); come alternativa
var btn = document.getElementById("aggiungi");
btn.addEventListener("click", add);

//qui controllo se nel localStorage è presente la chiave altrimenti la creo e creo l'array
if (localStorage.getItem('task')) {
    //uso lo split per prelevare la striga da task eliminanto la virgola e passando i valori all'array
    var arrayTask = localStorage.getItem('task').split(",");
} else {
    localStorage.setItem('task', 'prima task');
    var arrayTask = localStorage.getItem('task').split(",");
}

//ciclo per stampare subito il contenuto dell'array/localStorage
stampa();

//FUNZIONE PER AGGIUNGERE I CAMPI********************************************************
function add() {
    //prelevo l'input e l'ul dal documento
    var testo = document.getElementById("testo").value;

    if (testo != "") { // qui controllo se il campo è vuoto. se vuoto non faccio nulla.
        arrayTask.push(testo); //con il .push() aggiungo l'input all'array

        //ristampo nella <ul> la lista aggiornata
        stampa();

        //aggiorno la chiave task del localStorage
        localStorage.setItem('task', arrayTask);
        //svuoto il campo input
        document.getElementById("testo").value = "";
    } else {
        alert("Il campo è vuoto");
    }
}

//FUNZIONE PER eliminare I CAMPI********************************************************
//Questa funzione viene chiamata dal tasto rosso che passa l'indice preciso grazie al ciclo for di stampa.
function remove(i) {
    //elimino l'indice passato in remove dall'array
    arrayTask.splice(i, 1);
    //ristampo nella <ul> la lista aggiornata
    stampa();
    //aggiorno la chiave task del localStorage
    localStorage.setItem('task', arrayTask);
}

function stampa() {
    var ul = document.getElementById("ul");
    ul.innerHTML = ''; //svuoto la <ul>
    //ristampo nella <ul> la lista aggiornata
    for (i = 0; i < arrayTask.length; i++) {
        ul.innerHTML += '<div class="container"><div class="row p-1"><li class="list-group-item col-11">' + arrayTask[i] + '</li><button  type="button" onclick="remove(' + i + ')" class="btnRemove btn btn-danger  col-1">x</button></div></div>';
    };
}