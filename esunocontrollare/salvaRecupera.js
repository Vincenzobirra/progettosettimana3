salvaDato = function(testo) {
    localStorage.ultimoSalvato = testo;
    alert("salvato!!");
};

recuperaDato = function(elemento) {
    if (confirm("Recuperare il testo salvato?")) {
        elemento.value = localStorage.ultimoSalvato;

    }
};