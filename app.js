
var scores, roundScore, activePlayer, updateNew;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

function reLoad() {

    document.location.reload(true);

}

// Blocking the dice image on window onload.
document.querySelector('.dice').style.display = 'none';

// When roll dice is clicked.
document.querySelector('.btn-roll').addEventListener('click', function() {


    // Random number for dice.
    var dice = Math.floor(Math.random() * 6) + 1;

    // Image for dice no.
    var img = document.querySelector('.dice');
    img.style.display = 'block';
    img.src = "dice-" + dice + ".png";

    var score = document.getElementById("score-" + activePlayer);
    var scoreCurrent = document.getElementById("current-" + activePlayer);
    
    if ( dice !== 1) {

        roundScore += dice;
        scoreCurrent.textContent = roundScore;

    }

    else {

        roundScore = scores[activePlayer] = 0;
        scoreCurrent.textContent = roundScore;

        changeStyle();
        delayDice();
    }
    
    winner();

});


document.querySelector('.btn-hold').addEventListener("click", function() {

    scores[activePlayer] += roundScore;
    roundScore = 0;

    changeStyle();
    
});

// Changing Styling according to the player turn.
function changeStyle() {

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    activePlayer = activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}


function delayDice() {

    setTimeout( function() {
        document.querySelector('.dice').style.display = 'none';
    }, 2000);

}


