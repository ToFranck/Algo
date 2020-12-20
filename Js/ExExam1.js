
    
    
    
    var nombre ;
    let N;
    let X = 0;
    function resu(){
        var nombre = +document.getElementById("saisie").value;
        
        
        for(N = 1; N<=nombre; N++){
        X = X + N;
        
        }
        

        
        document.getElementById("result").innerHTML = "le résultat des N premiers entiers est: " + X;
        
    }