
	
document.getElementById("age").addEventListener("change", verif);

function verif() {
	age = document.getElementById("age").value;
	if (age <18) {
		document.getElementById("txt").innerHTML= "Programme réservé aux personnes majeures!" ;
		
    }
    else if ( age <=26 ){
        document.getElementById("txt").innerHTML= "Statut JEUNE!" ;
        
    }
    
    else if (age <=65 ){
        document.getElementById("txt").innerHTML= "Statut ADULTE!" ;
        
    }

    else if( 65 <age ){
        document.getElementById("txt").innerHTML= "Erreur! Ce programme s'adapte aux personnes non-retraitées" ;
    }
}




