

function tables(){
    var nombre = +document.getElementById("saisie").value;
    console.log(nombre)
    var i = 0;
        
        
    for(i=0; i<=10; i++){
        document.getElementById("table").innerHTML += nombre + "x" + i +"="+ nombre*i + "<br/>";
        
    }
    
    

}