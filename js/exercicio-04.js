function Exemplo(){

    //document.write("Escrevendo na tela");
    //document.getElementById("mensagem").innerText = "Escrevendo na tela"

     document.getElementById("mensagem").innerHTML = "<br>Escrevendo na tela<br>";

     document.getElementById("numero").value = "teste";

     console.log(document.getElementById("mensagem").innerHTML);

     let numero = document.getElementById("mensagem").value;

     console.log(numero);
    }

    function Trocar(){
        let numero = document.getElementById("numero").value;

        if(numero <18){ //teste
            //resposta verdadeira
            document.getElementById("mensagem").innerText = "Menor que 18"; 

        }
            else if(numero == 18)
        {
            document.getElementById("mensagem").innerText = "Igual a 18";
        }
        else
        {
    //resposta falsa
    document.getElementById("mensagem").innerText = "Maior que 18";
        }
    } 