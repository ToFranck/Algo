

var compteur =0;
var age =0;
  function verif() {

    var age = document.querySelector("#age").value;
    console.log(age);
    compteur++; 
    
     
if (age <10) {
  document.getElementById("txt").innerHTML= "plus grand" ;
  
  }
  else if ( age <=20 ){
      document.getElementById("txt").innerHTML= "Bien jouer !<br> en seulement " + compteur + " fois " ;
      
  }
  
  else if (age >=21 ){
      document.getElementById("txt").innerHTML= "petit!" ;
      
  }

  

 }


