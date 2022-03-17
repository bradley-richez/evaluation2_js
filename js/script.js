// VARIABLES 
var scores, roundScore, activePlayer, gamePlaying;

// GAME FUNCTION
game();

document.querySelector('.btn-roll').addEventListener('click', () => {
    if (gamePlaying) {

        // FLOOR RETURNS AN INT NUMBER
        // MATH.RANDOM RETURNS A NUMBER BETWEEN 1 AND 6
        var dice = Math.floor(Math.random() * 6) + 1;

        var roll_dice = document.querySelector('.dice');
        roll_dice.style.display = 'block';
        roll_dice.src = './images/dice-' + dice + '.png';



        // IF THE DICE IS DIFFERENT FROM 1
        if (dice !== 1) {

            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextRound();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', () => {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // 1ST TO REACH 100
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextRound();
        }
    }
});

// FUNCTION NEW ROUND
function nextRound() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}
// ADD FUNCTION GAME TO NEW BUTTON WHEN BUTTON IS CLICKED
document.querySelector('.btn-new').addEventListener('click', game);

// INITIALIZE ALL VARIABLES AND REMOVE TO 0 ALL PLAYERS DATA
function game() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}








