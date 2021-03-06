// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
for (var i = 1; i <= 3; i++) {
    var enemy = new Enemy((83 * (i - 1)));
    allEnemies.push(enemy);
}

//The gems which are used in the game. Each type is a subclass of gem. 
var orangeGem = new OrangeGem();
var blueGem = new BlueGem();
var greenGem = new GreenGem();
var gems = [];
gems.push(greenGem, orangeGem, blueGem);


gems[Math.floor(Math.random() * gems.length)].update(Math.floor(Math.random() * 8));

var player = new Player();



var resetGame = function () {
    if (!globalConstraints.resetGame) {
        globalConstraints.resetGame = true;
        setTimeout(function () {
            player.scores.push(player.score);
            console.log(player.scores);
            player.reset();
            allEnemies.forEach(function (enemy) {
                enemy.reset();
            });
            gems.forEach(function (gem) {
                gem.reset();
            });
            gems[Math.floor(Math.random() * gems.length)].update(Math.floor(Math.random() * 8));
            globalConstraints.resetGame = false;
            player.updateScoreElement();
            player.updateHighestScore();
            globalConstraints.gameLevel = 1;
            globalConstraints.updatingScore = false;
        }, globalConstraints.resetGameAfter);
    }
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

