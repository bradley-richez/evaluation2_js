<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    
    <!--FONT LATO-->
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <!--LINK CSS-->
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <title>JS Game</title>
</head>

<body>
    <!-- DIV QUI REGROUPE TOUT LE JEU-->
    <div class="game">
        <!--DIV DES JOUEURS-->
        <div class="player-0-panel active">
            <div class="player-name" id="name-0">Player 1</div>
            <div class="player-score" id="score-0">43</div>
            <div class="player-current">
                <div class="player-current-label">Current</div>
                <div class="player-current-score" id="current-0">11</div>
            </div>
        </div>
        <!--DIV DES JOUEURS-->
        <div class="player-1-panel">
            <div class="player-name" id="name-1">Player 2</div>
            <div class="player-score" id="score-1">72</div>
            <div class="player-current">
                <div class="player-current-label">Current</div>
                <div class="player-current-score" id="current-1">0</div>
            </div>
        </div>
        <!--AJOUT DES BOUTONS-->
        <button class="btn-new" style="background:none;">
            <ion-icon name="add-circle-outline"></ion-icon>
            New Game
        </button>
        <button class="btn-roll"style="background:none;">
            <ion-icon name="refresh-outline"></ion-icon>Roll dice
        </button>
        <button class="btn-hold"style="background:none;">
            <ion-icon name="download-outline"></ion-icon>Hold
        </button>
            <!--AJOUT DU CHEMIN DU DOSSIERS OU SONT LES IMAGES DU DE-->
        <img src="images/dice-6.png" alt="Dice" class="dice">
    </div>
    <!--LINK JS-->
    <script src="js/script.js"></script>
    <!--LINK JS POUR LES ICONES-->
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>

</html>
