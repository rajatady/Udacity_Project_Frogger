/**
 * Created by kumardivyarajat on 25/07/16.
 */

/********************************** UPDATED CODE *******************************************************/
/*
 *  UPDATE -
 *  Added constraints here.
 *
 * */
var Gem = function (index, points) {
    this.points = points;
    this.sprite = this.getGemSprite(index);
    this.constraints = {
        init: {
            x: -300,
            y: -300
        }
    };
    this.reset();
};


/********************************** UPDATED CODE *******************************************************/
/*
 *  UPDATE -
 *  Used local constraints instead of global constraints
 *
 * */
Gem.prototype.reset = function () {
    this.x = this.constraints.init.x;
    this.y = this.constraints.init.y;
};

/********************************** ADDED CODE *******************************************************/
/*
 *  ADD -
 *  Resources have been moved here.
 *
 * */
Gem.prototype.gemResources = [
    'images/Gem Blue.png',
    'images/Gem Green.png',
    'images/Gem Orange.png'
];


/********************************** ADDED CODE *******************************************************/
/*
 * ADD -
 * getGemSprite has been moves here from global scope.
 *
 * */

Gem.prototype.getGemSprite = function (index) {
    return this.gemResources[index];
};


Gem.prototype.update = function (x) {
    this.x = (101 * x);
    this.y = 40;
    console.log("Gem put at " + this.x + " " + this.y);
};

Gem.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 101, 83);
};


/********************************** ADDED CODE *******************************************************/
/*
 *  ADD -
 *  The checkCollision specific to the gems
 *
 * */

Gem.prototype.checkCollision = function (player) {
    console.log("Checking Gem");
    return (player.y < 20 && !globalConstraints.updatingScore);
};


/********************************** ADDED CODE *******************************************************/
/*
 *  ADD -
 *  the onCollision method defines the action to be taken when a gem is collided with.
 *
 * */

Gem.prototype.onCollision = function (player) {
    globalConstraints.updatingScore = true;
    player.updateScore(this.points);
    this.reset();
};

/*
 *  Note - The abstraction for different types of gems exists because gems can do various other things.
 *  It is possible to add a heart as a gem. That gem would perform the function of incrementing the lives of the
 *  player. Certainly for the current gameplay, the abstraction is an overkill.
 *
 *  Please suggest if the abstraction between different types of gems with different collision
 *  logic and action can be performed in a better way. I would love implement it in a better way.
 *
 * */
var OrangeGem = function () {
    Gem.call(this, 2, 100);
};

OrangeGem.prototype = Object.create(Gem.prototype);
OrangeGem.prototype.constructor = OrangeGem;

var GreenGem = function () {
    Gem.call(this, 1, 50);
};

GreenGem.prototype = Object.create(Gem.prototype);
GreenGem.prototype.constructor = GreenGem;


var BlueGem = function () {
    Gem.call(this, 0, 25);
};

BlueGem.prototype = Object.create(Gem.prototype);
BlueGem.prototype.constructor = BlueGem;

