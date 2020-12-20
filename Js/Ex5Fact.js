var facto = 1;
var nb = 0;
var i =0 ;

function f(){
    var nb = +document.getElementById("saisie").value;
    console.log(nb)
    while(i<nb){
        i++;
        facto=facto*i;

    }
    
    document.getElementById("facto").innerHTML = 'Le factoriel est:' + facto +' <br> voulez vous recommencer?(o/n)' + " <br> <input type='text' id='rep'>" + "<button onclick='again()' id='b2'>Valider</button>" ;
    
}

function again() {

    if (document.querySelector("#rep").value == "o" ){ 
        document.location.reload();
    }
    else {
        document.getElementById("txt2").innerHTML= "Bye bye " ;
    }
}

