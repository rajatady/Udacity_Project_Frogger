/**
 * Created by kumardivyarajat on 25/07/16.
 */
var constraints = {
    rightEdge: canvas.width - 105,
    leftEdge: 0,
    topEdge: -40,
    bottomEdge: 420,
    playerStep: 40,
    enemiesInit: {
        x: -100,
        y: 50
    },
    playerInit: {
        x: 0,
        y: 420
    },
    gemsInit: {
        x: -300,
        y: -300
    },
    resetGame: false,
    resetGameAfter: 3000,
    gemsPoints: {
        orange: 100,
        blue: 50,
        green: 25
    },
    updatingScore: false,
    gameLevel: 1,
    gameStarted: false
};

var randomEnemySpeedGenerator = function () {
    return (Math.floor((Math.random() * 200 * constraints.gameLevel) + (150)));
};

var randomXGenerator = function () {
    return Math.floor(Math.random() * -400 - 50);
};

var gemResources = [
    'images/Gem Blue.png',
    'images/Gem Green.png',
    'images/Gem Orange.png'
];

var getGemSprite = function (index) {
    return gemResources[index];
};

var randomGemGenerator = function () {
    return (Math.floor(Math.random() * 3));
};

var randomGemRowGenerator = function () {
    return (Math.floor(Math.random() * 8));
};