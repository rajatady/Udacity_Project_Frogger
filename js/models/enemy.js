/**
 * Created by kumardivyarajat on 25/07/16.
 */
var Enemy = function (y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.y = y;
    this.reset();
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (!player.hasCollided) {
        if (this.x > constraints.rightEdge + 80) {
            this.reset();
        }
        this.move(dt);
    }
};

Enemy.prototype.reset = function () {
    this.x = randomXGenerator();
    console.log("Rate ", randomEnemySpeedGenerator());
    this.movementRate = randomEnemySpeedGenerator();
    // console.log("Enemy");
};

Enemy.prototype.move = function (dt) {
    this.x = this.x + ( this.movementRate * dt);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
