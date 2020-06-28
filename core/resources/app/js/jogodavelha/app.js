X = '<font size="100" face="arial black">X</font>';
O = '<font size="100" face="arial black">O</font>';
letra = X;
cont = 0;

function joga(matriz)
{
    on = document.getElementById(matriz).innerHTML;
    if (on == X || on == O)
    {
        alert("Esta posição já foi ocupada!");
    }
    else
    {
        document.getElementById(matriz).innerHTML = letra;
        if (letra == X)
        {
            letra = O;
            document.jogadorr.jogadorvez.value = document.entrada.nome2.value
        }
        else
        {
            letra = X;
            document.jogadorr.jogadorvez.value = document.entrada.nome1.value
        }
        cont++;
    }
}

function verificar(){
    A1L1 = document.getElementById('matriz11').innerHTML;
    A1L2 = document.getElementById('matriz12').innerHTML;
    A1L3 = document.getElementById('matriz13').innerHTML;
    A2L1 = document.getElementById('matriz21').innerHTML;
    A2L2 = document.getElementById('matriz22').innerHTML;
    A2L3 = document.getElementById('matriz23').innerHTML;
    A3L1 = document.getElementById('matriz31').innerHTML;
    A3L2 = document.getElementById('matriz32').innerHTML;
    A3L3 = document.getElementById('matriz33').innerHTML;

    if (((A1L1 == X) && (A1L2 == X) && (A1L3 == X))
    ||((A2L1 == X) && (A2L2 == X) && (A2L3 == X))
    ||((A3L1 == X) && (A3L2 == X) && (A3L3 == X))
    ||((A1L1 == X) && (A2L1 == X) && (A3L1 == X))
    ||((A1L2 == X) && (A2L2 == X) && (A3L2 == X))
    ||((A1L3 == X) && (A2L3 == X) && (A3L3 == X))
    ||((A1L1 == X) && (A2L2 == X) && (A3L3 == X))
    ||((A1L3 == X) && (A2L2 == X) && (A3L1 == X))

)

{
    alert(entrada.nome1.value + ",você venceu!");
    novo();
    ponto1()

}
else if (((A1L1 == O) && (A1L2 == O) && (A1L3 == O))
||((A2L1 == O) && (A2L2 == O) && (A2L3 == O))
||((A3L1 == O) && (A3L2 == O) && (A3L3 == O))
||((A1L1 == O) && (A2L1 == O) && (A3L1 == O))
||((A1L2 == O) && (A2L2 == O) && (A3L2 == O))
||((A1L3 == O) && (A2L3 == O) && (A3L3 == O))
||((A1L1 == O) && (A2L2 == O) && (A3L3 == O))
||((A1L3 == O) && (A2L2 == O) && (A3L1 == O))

)

{
    alert(entrada.nome2.value + ",você venceu!");
    novo();
    ponto2()
}
else if(cont==9){
    alert("Deu Velha!");
    novo();
    velhas();
}
if (document.entrada.velhas.value == 10)
{
    alert("Vocês são muito ruins, troquem os jogadores por favor!")
    novoj();
    novop();
    novo()
}
if (document.entrada.placar1.value == 10)
{
    alert(entrada.nome1.value + ",você venceu o jogo, próximo adversário!")
    novop();
    document.entrada.nome2.value = ' ';
    novo()
}
if (document.entrada.placar2.value == 10)
{
    alert(entrada.nome2.value + ",você venceu o jogo, próximo adversário!")
    novop();
    document.entrada.nome1.value = ' ';
    novo()
}
}
function novo(){
    for (i=1; i<4; i++){
        for (j=1; j<4; j++){
            nomecelula = 'matriz' + i + j
            document.getElementById(nomecelula).innerHTML = '';
        }
    }
    cont = 0;
}
function novoj(){
    document.entrada.nome1.value = ' ';
    document.entrada.nome2.value = ' ';
    cont = 0;
}
function Verifica_Nome1()
{
    while(entrada.nome1.value=="")
    {
        alert("Favor preencher novamente o campo! ");
        entrada.nome1.value=prompt("Digite novamente o nome","");
    }
}

function Verifica_Nome2()
{
    while (entrada.nome2.value=="")
    {
        alert("Favor preencher novamente o campo! ");
        entrada.nome2.value=prompt("Digite novamente o nome","");
    }
}




function ponto1()
{
    document.entrada.placar1.value++;
}
function ponto2()
{
    document.entrada.placar2.value++;
}
function velhas ()
{
    document.entrada.velhas.value++;
}
function resetvelhas ()
{
    document.entrada.velhas.value = ' ';
}
function novop()
{
    document.entrada.placar1.value = ' ';
    document.entrada.placar2.value = ' ';
    resetvelhas ()
}
