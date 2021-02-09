console.log("TIC TAC TOE v1");

var url = new URL(location.href);
var player1 = url.searchParams.get("player1");
var player2 = url.searchParams.get("player2");
var play1 = url.searchParams.get("play1");
var play2 = url.searchParams.get("play2")
// Initialisation des joueurs
var players =[{
    name: player1,
    play: play1
},{
    name: player2,
    play: play2
}];


//var reponse = prompt ("Quel est le nom du players 1 ?","<Entrez le nom ici");
//var reponse2 = prompt("Quel est le nom du players 2 ?","<Entrez le nom ici")


var msg = document.querySelector('.msg');
var cases = document.querySelectorAll(".case");
var player1el = document.querySelector('.player1');
var player2el = document.querySelector('.player2');

// On gère la grille
var a1 = document.querySelector('#a1');
var a2 = document.querySelector('#a2');
var a3 = document.querySelector('#a3');

var b1 = document.querySelector('#b1');
var b2 = document.querySelector('#b2');
var b3 = document.querySelector('#b3');

var c1 = document.querySelector('#c1');
var c2 = document.querySelector('#c2');
var c3 = document.querySelector('#c3');

// Initialisation de l'interface
player1el.innerHTML = players[0].play + ": " + players[0].name;
player2el.innerHTML = players[1].play + ": " + players[1].name;
var currentPlayer = 0;

cases.forEach((item) => {
    item.onmouseover = function() {
        this.style.background = "#C1C1C1";
    }
    
    item.onmouseout = function() {
        this.style.background = null;
    }

    item.onclick = function () {
        // Gére les doubles clics
        if (this.textContent) {
            msg.innerHTML = "Vous n'avez pas le droit de jouer ici."
            msg.style.display = "block";
            return false;
        }

        // Le joueur joue
        this.innerHTML = players[currentPlayer].play;

        // Check pour savoir si le joueur a gagné.
        // console.log(a1.textContent);
        if (a1.textContent == players[currentPlayer].play && 
            a2.textContent == players[currentPlayer].play && 
            a3.textContent == players[currentPlayer].play) {

            msg.innerHTML = players[currentPlayer].name + " gagne la partie";
            msg.style.display = "block";

            return false;
        }

        if (b1.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            b3.textContent == players[currentPlayer].play) {

            msg.innerHTML = players[currentPlayer].name + " gagne la partie";
            msg.style.display = "block";

            return false;
        }

        if (c1.textContent == players[currentPlayer].play && 
            c2.textContent == players[currentPlayer].play && 
            c3.textContent == players[currentPlayer].play) {

            msg.innerHTML = players[currentPlayer].name + " gagne la partie";
            msg.style.display = "block";

            return false;
        }

        if (a1.textContent == players[currentPlayer].play && 
            b1.textContent == players[currentPlayer].play && 
            c1.textContent == players[currentPlayer].play) {

            msg.innerHTML = players[currentPlayer].name + " gagne la partie";
            msg.style.display = "block";

            return false;
        }

        if (a2.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            c2.textContent == players[currentPlayer].play) {

            msg.innerHTML = players[currentPlayer].name + " gagne la partie";
            msg.style.display = "block";

            return false;
        }

        if (a3.textContent == players[currentPlayer].play && 
            b3.textContent == players[currentPlayer].play && 
            c3.textContent == players[currentPlayer].play) {

            msg.innerHTML = players[currentPlayer].name + " gagne la partie";
            msg.style.display = "block";

            return false;
        }

        if (a1.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            c3.textContent == players[currentPlayer].play) {

            msg.innerHTML = players[currentPlayer].name + " gagne la partie";
            msg.style.display = "block";

            return false;
        }

        if (a3.textContent == players[currentPlayer].play && 
            b2.textContent == players[currentPlayer].play && 
            c1.textContent == players[currentPlayer].play) {

            msg.innerHTML = players[currentPlayer].name + " gagne la partie";
            msg.style.display = "block";

            return false;
        }

        // Voir le cas où personne n'a gangé
        if (a1.textContent != "" &&
            a2.textContent != "" &&
            a3.textContent != "" && 
            b1.textContent != "" && 
            b2.textContent != "" && 
            b3.textContent != "" && 
            c1.textContent != "" && 
            c2.textContent != "" && 
            c3.textContent != "") {

            msg.innerHTML = "Personne n'a gagné la partie";
            msg.style.display = "block";

            return false;
        }

        // Changement de joueur
        if (currentPlayer == 0) {
            currentPlayer = 1
            player1el.classList.remove('activeplayer');
            player2el.classList.add('activeplayer');
        } else {
            currentPlayer = 0
            player2el.classList.remove('activeplayer');
            player1el.classList.add('activeplayer');
        }
    }
});