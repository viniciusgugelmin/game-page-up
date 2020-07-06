/* Variable declarations */
//
// Words array
var words = ['POKEMON', 'NARUTO', 'METRO', 'ONIBUS', 'CARRO', 'CAMINHAO', 'FLORESTA', 'VALORANT', 'COMPUTADOR', 'CINEMA', 'TERRA', 'PLUTAO', 'SENPAI'];
var word;
var tableTr;
// Count
var errors;
var okay;
var okayLetters;
// image
var imagemBoneco;

/* Functions */
// Play
function play(letter) {
    let letterClass = '.' + letter;

    if (!document.querySelector(letterClass).classList.contains("letter-active") && word) {
        document.querySelector(letterClass).classList.toggle("letter-active");

        verifyWord(letter);
    }
}
//
// Load a new word
function getWord() {
    errors = 0;
    okay = false;
    okayLetters = 0;
    imagemBoneco = document.getElementById('imagem-boneco');

    imagemBoneco.style.backgroundImage = "url('../../../../../public_html/images/e0.png')";

    document.getElementById('word').style.display = 'table';

    tabelTr = document.querySelector('#word-tr');
    tabelTr.innerHTML = '';

    word = words[Math.floor(Math.random() * words.length)];

    resetKeyboard();

    for (let i = 0; i < word.length; i++) {
        tabelTr.insertCell().innerHTML = '_';
    }
}
//
// Reset the keyboard to default class
function resetKeyboard() {
    for (let i = 0; i < 26; i++ ) {
        document.getElementById('teclado-tr').children[i].classList.remove("letter-active");
    }
}
//
// Verify the play and the word
function verifyWord(e) {
    let okayNumber = 0;
    imagemBoneco = document.getElementById('imagem-boneco');

    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == e) {
            tabelTr.children[i].innerHTML = e;
            okayNumber = 1;
            okayLetters++;

            if (word.length == okayLetters) {
                okay = true;
            }
        }
    }

    if (!okayNumber) {
        errors++;

        console.log(errors);

        switch (errors) {
            case 1:
            imagemBoneco.style.backgroundImage = "url('../../../../../public_html/images/e1.png')";
            break;
            case 2:
            imagemBoneco.style.backgroundImage = "url('../../../../../public_html/images/e2.png')";
            break;
            case 3:
            imagemBoneco.style.backgroundImage = "url('../../../../../public_html/images/e3.png')";
            break;
            case 4:
            imagemBoneco.style.backgroundImage = "url('../../../../../public_html/images/e4.png')";
            break;
            case 5:
            imagemBoneco.style.backgroundImage = "url('../../../../../public_html/images/e5.png')";
            break;
            case 6:
            imagemBoneco.style.backgroundImage = "url('../../../../../public_html/images/e6.png')";
            break;
        }
    }


    checkWin();
}

function checkWin() {
    if (errors == 6) {
        setTimeout(function(){
            alert("Você perdeu!");
            getWord();
        }, 100);
    } else if (okay) {
        setTimeout(function(){
            alert("Você ganhou!");
            getWord();
        }, 100);
    }
}
