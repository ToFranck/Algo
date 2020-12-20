





function impair(){ 
    var i; 
    var compteur=0;
    for(i = 1; i <= 40; i++){ 
      if((i % 2) == 0){ 
       continue; 
      } 
      else {
        compteur++;
        document.getElementById("rep").innerHTML += i + "est le "+compteur+"eme nombre impair"+'<br/>'; 
        
      }
    
    } 
   } 

