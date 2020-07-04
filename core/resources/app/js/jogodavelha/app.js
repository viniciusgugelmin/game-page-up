/* Variable declarations */
//
// Point markers
var X = '<font size="100">X</font>';
var O = '<font size="100">O</font>';
// Players
var playerOne;
var playerTwo;
// Player turn
var playerTurn;
// First play letter
var letter = X;
// Counter
var count = 0;
// Tic tac toe
var matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];
// Instructions
alert("BEM VINDO AO JOGO DA VELHA!\n1- Digite o nome dos jogadores antes de começar\n2- Para jogar contra o computador digite 'CPU' na caixa do PLAYER 2\n3- PLAYER 1 = X, PLAYER 2 = O");

/* Functions */
//
// Main function
function play(matriz) {
    let playersName = verifyName();

    if (playersName) {
        let square = document.getElementById(matriz);
        playerTurn = document.querySelector('#playerturn');

        if (square.innerHTML != X && square.innerHTML != O) {
            square.innerHTML = letter;

            if (letter == X) {
                letter = O;
                playerTurn.value = playerTwo;
            } else {
                letter = X;
                playerTurn.value = playerOne;
            }

            count++;

            verify(playerTurn.value);
        }
    } else {
        alert("Você precisa informar o nome dos jogadores!");
    }
}
//
// Play check
function verify(player) {
    let matrizId;

    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            matrizId = 'matriz' + x + y;
            matriz[x][y] = document.getElementById(matrizId).innerHTML;
        }
    }

    if (((matriz[0][0] == X) && (matriz[0][1] == X) && (matriz[0][2] == X))
    ||((matriz[1][0] == X) && (matriz[1][1] == X) && (matriz[1][2] == X))
    ||((matriz[2][0] == X) && (matriz[2][1] == X) && (matriz[2][2] == X))
    ||((matriz[0][0] == X) && (matriz[1][0] == X) && (matriz[2][0] == X))
    ||((matriz[0][1] == X) && (matriz[1][1] == X) && (matriz[2][1] == X))
    ||((matriz[0][2] == X) && (matriz[1][2] == X) && (matriz[2][2] == X))
    ||((matriz[0][0] == X) && (matriz[1][1] == X) && (matriz[2][2] == X))
    ||((matriz[0][2] == X) && (matriz[1][1] == X) && (matriz[2][0] == X))) {
        newRound();
        playerPoint('#placar1');

    } else if (((matriz[0][0] == O) && (matriz[0][1] == O) && (matriz[0][2] == O))
    ||((matriz[1][0] == O) && (matriz[1][1] == O) && (matriz[1][2] == O))
    ||((matriz[2][0] == O) && (matriz[2][1] == O) && (matriz[2][2] == O))
    ||((matriz[0][0] == O) && (matriz[1][0] == O) && (matriz[2][0] == O))
    ||((matriz[0][1] == O) && (matriz[1][1] == O) && (matriz[2][1] == O))
    ||((matriz[0][2] == O) && (matriz[1][2] == O) && (matriz[2][2] == O))
    ||((matriz[0][0] == O) && (matriz[1][1] == O) && (matriz[2][2] == O))
    ||((matriz[0][2] == O) && (matriz[1][1] == O) && (matriz[2][0] == O))) {
        newRound();
        playerPoint('#placar2');

    } else if (count == 9) {
        newRound();
        playerPoint('#draw');
    } else if (player == 'CPU') {
        console.log("playCPU")
        cpuPlay();
    }
}
//
// Reset tic tac toe table
function newRound() {
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++){
            matrizId = 'matriz' + x + y;
            document.getElementById(matrizId).innerHTML = '';
        }
    }

    letter = X;
    playerTurn.value = playerOne;
    
    count = 0;
}
//
// Verify players name
function verifyName()
{
    if (document.querySelector('#nome1').value.trim() == "") {
        return false;

    } else {
        playerOne = document.querySelector('#nome1').value;
    }

    if (document.querySelector('#nome2').value.trim() == "") {
        return false;

    } else {
        playerTwo = document.querySelector('#nome2').value;
    }

    return true;
}
//
// Mark the points
function playerPoint(number) {
    document.querySelector(number).value++;
}
//
// CPU Play
function cpuPlay() {
    let possiblePlays = [];
    let countPlays = 0;

    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            matrizId = 'matriz' + x + y;

            if (document.getElementById(matrizId).innerHTML == '') {
                possiblePlays[countPlays] = matrizId;
                countPlays++;
            }
        }
    }

    let selectedPlay = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
    play(selectedPlay);
}
