



function hypoténuse(){
    var nb1 = Number(document.getElementById("nb1").value);
    var nb2 = Number(document.getElementById("nb2").value);
    var reslutat = Math.hypot(nb1, nb2);
    var hypo = document.getElementById("hypo").innerHTML = reslutat;
    document.getElementById("reslutat").value = "";
}