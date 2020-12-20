


function again() {

    if (document.querySelector("#rep").value == "o" ){ 
        document.location.reload();
    }
    else {
        document.getElementById("txt2").innerHTML= "Bye bye " ;
    }
}


function verif() {

    var age = document.querySelector("#age").value;
    console.log(age)
    
    if(age < 18 || age> 65 ){
        document.getElementById("txt").innerHTML= "Programme réservé aux personnes majeures!<br> Voulez vous recommencer? (o/n) " 
        + "<input type='text' id='rep'>" + "<button onclick='again()' id='b2'>Valider</button>" ;
        
        

    }
    else if (age < 27 ){
        document.getElementById("txt").innerHTML= "Statut jeune! "
    }
    else {
        document.getElementById("txt").innerHTML= "Statut adulte! "
    }

    

}

