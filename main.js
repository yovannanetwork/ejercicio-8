
function calcular(){
    var n=document.getElementById("ingresar").value;
    var diferencia = document.getElementById("salida");
    var doble = document.getElementById("salida");
    var salida = document.getElementById("salida");
    var texto = document.getElementById("texto");

    
    if(n>21){
        var diferencia= 2*(n-21);
        salida.innerHTML= diferencia;
        texto.innerHTML = "doble de la diferencia absoluta"
    }
    else{
        doble = (21-n);
        salida.innerHTML = doble;
        texto.innerHTML = "diferencia absoluta"
    }
   
}