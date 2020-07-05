/* Variable declarations */
//

function play(letter) {
    let letterClass = '.' + letter;

    document.querySelector(letterClass).classList.toggle("letter-active");
}
