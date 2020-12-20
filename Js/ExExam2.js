function Puissance(){
    let Nombre = Number(document.getElementById("Nombre").value);
    let Exposant = Number(document.getElementById("Exposant").value);
    let Reslutat = Math.pow(Nombre, Exposant);
    let puissances = document.getElementById("puissances").innerHTML = "Le resultat de " + Nombre+" puissance "+ Exposant + " est "+ Reslutat;
    document.getElementById("Reslutat").value = "";
}
