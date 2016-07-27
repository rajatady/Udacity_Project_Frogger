/**
 * Created by kumardivyarajat on 25/07/16.
 */

/********************************** UPDATED CODE *******************************************************/
/*
 *  UPDATE -
 *  Added constraints here
 *
 * */
var Enemy = function (y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.constraints = {
        init: {
            x: -100,
            y: 50
        }
    };
    this.y = this.constraints.init.y + y;
    this.reset();


};


/********************************** UPDATED CODE *******************************************************/
/*
 *  UPDATE -
 *  update method now takes the player object as parameter instead of the global player object.
 *
 * */

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt,player) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (!player.hasCollided) {
        if (this.x > globalConstraints.rightEdge + 80) {
            this.reset();
        }
        this.move(dt);
    }
};


/********************************** ADDED CODE *******************************************************/
/*
 *  ADD -
 *  The checkCollision conditions for the enemy.
 *
 * */

Enemy.prototype.checkCollision = function (player) {
    return (player.y <= this.y + 30 && player.y >= this.y - 50);
};

/********************************** ADDED CODE *******************************************************/
/*
 *  ADD -
 *  onCollision for the enemy defines the action to be taken when an enemy is collided with.
 *
 * */
Enemy.prototype.onCollision = function (player) {
    player.hasCollided = true;
    resetGame();
};


Enemy.prototype.reset = function () {
    this.x = this.randomXGenerator();
    this.movementRate = this.randomEnemySpeedGenerator();
};


Enemy.prototype.move = function (dt) {
    this.x = this.x + ( this.movementRate * dt);
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/********************************** ADDED CODE *******************************************************/
/*
 *  ADD -
 *  randomEnemySpeedGenerator is now local method
 *
 * */

Enemy.prototype.randomEnemySpeedGenerator = function () {
    return (Math.floor((Math.random() * 200 * globalConstraints.gameLevel) + (150)));
};

/********************************** ADDED CODE *******************************************************/
/*
 *  ADD -
 *  randomXGenerator is now local method
 *
 * */

Enemy.prototype.randomXGenerator = function () {
    return Math.floor((Math.random() * -400) - 50);
};
