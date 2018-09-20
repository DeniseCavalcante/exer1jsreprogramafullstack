
var btn = document.querySelector("#botao");

btn.addEventListener('click', function(){
    var usuario = document.querySelector("#usuario").value;
    if(usuario.length<1){
        alert("nao");
    } else{
        alert("ok");
    }       
});