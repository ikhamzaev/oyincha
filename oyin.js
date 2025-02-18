'use strict';
let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    document.querySelector(".again").addEventListener("click", function () {
        document.querySelector('.ball').textContent = "20";
        document.querySelector(".number").textContent = " ?";
        document.querySelector(".message").textContent = "Tahmin qilishni boshleng";
        document.querySelector("body").style.backgroundColor = "#222";
        Secretnumber = Math.trunc(Math.random() * 20) + 1;


    })
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    }
    else if (Secretnumber === guess) {
        document.querySelector(".message").textContent = "Qattan topdiz Sarvinoz???";
        document.querySelector("body").style.backgroundColor = "#228B22";
        document.querySelector("message").style.height = "9rem";

        if (score > highscore) {
            score = highscore;
            documentquerySelector(".highscore").textContent = highscore;
        }

    }

    else if (guess !== Secretnumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "E sizga hali bor ekan";
            score--;
            document.querySelector(".score").textContent = score;
            document.querySelector("body").style.backgroundColor = "#FF0000"
        }
        else {
            document.querySelector(".message").textContent = "yutqazdiz(qachon yutgansiz ozi)";
            document.querySelector("body").style.backgroundColor = "#8B0000"
        }

    }
});
