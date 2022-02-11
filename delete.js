salvaDato = function() {
    chiave = document.querySelector("#testo").value; //lo stesso di getbyid
    localStorage.setItem('chiave', chiave);
    alert("bravo hai salvato");
}

cancellaDato = function() {
    localStorage.removeItem(salvato);
    localStorage.setItem('chiave', chiave); //primo valore la chiave da cambiare. secondo valore la nuova
}

check = function() {
    if (localStorage.getItem("chiave")) {
        alert("la chiave contiene " + localStorage.getItem("chiave"));


    }
}