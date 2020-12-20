var tab = [];
var somme = 0;
var compteur = 0 ;
var moyenne = 0;
var min = 0;
var max = 0;




 document.getElementById("min").innerHTML = min;
 document.getElementById("max").innerHTML = max;
 document.getElementById("moyenne").innerHTML = moyenne;

function rep(){
  var nombre = +document.getElementById("saisie").value;
  
 
  if (nombre != 0){
    tab.push(nombre);
    somme = somme + nombre;     //somme+=nombre 
    console.log('ceci est la somme ' + somme)
    compteur ++;
    console.log(compteur)
    moyenne= somme / compteur ;
    console.log(tab)
    
  }
  else {
    document.getElementById("somme").innerHTML = 'La somme est :' + somme ;
    
    document.getElementById("moyenne").innerHTML ='La moyenne est '+ moyenne;
    document.getElementById("max").innerHTML =  Math.max.apply(Math, tab);
    document.getElementById("min").innerHTML = Math.min.apply(Math, tab);
    
    
  }
}



function verif(){
  var saisie = document.querySelector("#saisie").value;
  console.log(saisie)

}

function add() {

  if (document.querySelector("#saisie").value == "0" ){ 
    console.log(saisie)
  
  }
  else("some"=="saisie"+ "saisie") 
    document.getElementById("nombre_entier").innerHTML = "somme";
    
}
