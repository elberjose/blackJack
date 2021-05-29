var pontos_jogador1=0;
var pontos_jogador2=0;

function iniciar() {
    var btn_iniciar = document.getElementById("btn_iniciar");
    var btn_reiniciar = document.getElementById("btn_reiniciar");
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");


    $(btn_jogador1).removeAttr( 'disabled');
    $(btn_reiniciar).removeAttr( 'disabled');
    $(btn_parar1).removeAttr( 'disabled');
    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
    $(btn_iniciar).attr('disabled', 'disabled');

    pontos_jogador1=0;
    pontos_jogador2=0;

    document.getElementById("jogador1").innerHTML=pontos_jogador1;
    document.getElementById("jogador2").innerHTML=pontos_jogador2; 
}


 function reiniciar() {

    var carta1 = document.getElementById("cartas1");
    var carta2 = document.getElementById("cartas2");
    $(carta1).attr("src", '/images/0.png');
    $(carta2).attr("src", '/images/0.png');
  
    pontos_jogador1=0;
    pontos_jogador2=0;

    document.getElementById("jogador1").innerHTML=0;
    document.getElementById("jogador2").innerHTML=0;  
 }


function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    var cartas1 = document.getElementById("cartas1");
    var valor = valorAleatorio();

    $(cartas1).attr("src", '/images/' + valor + '.png');

    pontos_jogador1+=valor;

    document.getElementById("jogador1").innerHTML=pontos_jogador1;

}



function parar1() {
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");

    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');

    validar();
}

function jogador2() {
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_parar1 = document.getElementById("btn_parar_1");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    var cartas2 = document.getElementById("cartas2");
    var valor = valorAleatorio();

    $(cartas2).attr("src", '/images/' + valor + '.png');

    pontos_jogador2+=valor;

    document.getElementById("jogador2").innerHTML=pontos_jogador2;
}



function parar2() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar1).removeAttr('disabled');

    validar();
}

function validar() {

    if (pontos_jogador1>0 && pontos_jogador2>0 && pontos_jogador1<21 && pontos_jogador2<21){

        if (pontos_jogador1>pontos_jogador2){
            alert("Parabens jogador 1 Você Venceu");
            reiniciar();
        }else if (pontos_jogador2>pontos_jogador1){
            alert("Parabens jogador 2 Você Venceu");
            reiniciar();
        }else{
            alert("A banca Ganhou");
        }
    }else{
        if(pontos_jogador1>21){
            alert("Jogador 1 Você Estourou");
            reiniciar();
        }else if(pontos_jogador2>21){
            alert("Jogador 2 Você Estourou");
            reiniciar();
        }
    }
}