/**
 * Created by kumardivyarajat on 25/07/16.
 */
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


//    The Player class
/*
 * Properties :- 
 * 
 * */

var Player = function () {
    this.sprite = "images/char-boy.png";
    this.state = "stand";
    this.side = "grass";
    this.scores = [];
    this.reset();
};

Player.prototype.update = function (dt) {
    this.move();
};

Player.prototype.move = function (dt) {
    if (!this.hasCollided) {
        if (this.state == "move_right") {
            if (this.x + constraints.playerStep <= constraints.rightEdge) {
                this.x = this.x + constraints.playerStep;
                this.state = "stand";
            }
        }
        else if (this.state == "move_left") {
            if (this.x - constraints.playerStep >= constraints.leftEdge) {
                this.x = this.x - constraints.playerStep;
                this.state = "stand";
            }
        }
        if (this.state == "move_up") {
            if (this.y - constraints.playerStep > constraints.topEdge) {
                this.y = this.y - constraints.playerStep;
                this.state = "stand";
            }
        }
        else if (this.state == "move_down") {
            if (this.y + constraints.playerStep <= constraints.bottomEdge) {
                this.y = this.y + constraints.playerStep;
                this.state = "stand";
            }
        } else if (this.state = "stand") {
            this.checkCollision();
            this.checkCollisionWithGem();
            this.checkStonePathCrossingStatus();
        }
    }
    // console.log(
    //     "Player x - ", this.x,
    //     "Player y - ", this.y,
    //     "Top Edge - ", constraints.topEdge,
    //     "Bottom Edge - ", constraints.bottomEdge,
    //     "Left Edge - ", constraints.leftEdge,
    //     "Right Edge - ", constraints.rightEdge
    // );
};

Player.prototype.checkCollision = function () {
    for (var i = 0; i < allEnemies.length; i++) {
        var enemy = allEnemies[i];
        if (this.x <= enemy.x + 50 && this.x >= enemy.x - 30 &&
            this.y >= enemy.y - 40 && this.y <= enemy.y + 40) {
            this.hasCollided = true;
            // console.log("Collision");
            resetGame();
        }
    }
};

Player.prototype.checkCollisionWithGem = function () {
    for (var i = 0; i < gems.length; i++) {
        var gem = gems[i];
        if (this.x <= gem.x + 30 && this.x >= gem.x - 30 &&
            this.y <= gem.y - 40) {
            if (!constraints.updatingScore) {
                constraints.updatingScore = true;
                this.updateScore(gem.points);
                // console.log("Found Gem", gem);
                gem.reset();
            }
        }
    }
};

Player.prototype.updateScoreElement = function () {
    scoreElement.innerHTML = this.score;
};

Player.prototype.updateHighestScore = function () {
    highestScoreElement.innerHTML = this.getHighestScore();
};

Player.prototype.getHighestScore = function () {
    // console.log("Highest Score - ",this.scores.sort());
    return this.scores.length > 0 ? this.scores.sort().slice(-1) : 0;
};

Player.prototype.checkStonePathCrossingStatus = function () {
    if (this.side == "grass" && this.y <= -20) {
        if (!constraints.updatingScore) {
            constraints.updatingScore = true;
            this.updateScore(50);
            console.log("Reached water");
            this.side = "water";
        }
    } else if (this.side == "water" && this.y >= 260) {
        if (!constraints.updatingScore) {
            constraints.updatingScore = true;
            this.updateScore(50);
            console.log("Reached grass");
            this.side = "grass";
            gems[randomGemGenerator()].update(randomGemRowGenerator());
        }
    }
};

Player.prototype.reset = function () {
    this.hasCollided = false;
    this.x = constraints.playerInit.x;
    this.y = constraints.playerInit.y;
    this.score = 0;
    this.side = "grass";

};

Player.prototype.updateScore = function (gemScore) {
    // Set timeout to handle the concurrency which arises due to the player reaching the other end at the same y position as the gem.
    // This leads to a race condition. Settimeout fixes the issue.
    setTimeout(function () {
        player.score += gemScore;
        constraints.updatingScore = false;
        constraints.gameLevel = Math.floor(player.score / 200) + 1;
        console.log("Score - ", player.score);
        player.updateScoreElement();
    }, 0);
};


Player.prototype.handleInput = function (keyCode) {
    switch (keyCode) {
        case "left":
            this.state = "move_left";
            break;

        case "right":
            this.state = "move_right";
            break;

        case "up":
            this.state = "move_up";
            break;

        case "down":
            this.state = "move_down";

    }
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
