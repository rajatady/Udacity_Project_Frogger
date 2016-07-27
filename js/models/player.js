/**
 * Created by kumardivyarajat on 25/07/16.
 */
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


//    The Player class
/*
 * PROPERTIES :-
 *  sprite, side, scores, globalConstraints, score
 *
 *  METHODS :-
 *  update, move, render, reset, updateScoreElement, updateHighestScoreElement, checkCollision
 *
 *
 * */

var Player = function () {
    this.sprite = "images/char-boy.png";
    this.state = "stand";
    this.side = "grass";
    this.scores = [];
    this.constraints = {
        init: {
            x: 0,
            y: 420,
            score: 0
        },
        gamePlay: {
            steps: 40
        }
    };
    this.reset();
};

/********************************** UPDATED CODE *******************************************************/
/*
 *  UPDATE -
 *  The update method only checks for the player position instead of moving the player. This increases efficiency
 *  of the program a bit.
 *
 * */

Player.prototype.update = function (entities) {
    this.checkCollision(entities);
    this.checkStonePathCrossingStatus();
};

/********************************** UPDATED CODE *******************************************************/
/*
 *  UPDATE -
 *  The move method now uses switch instead of if conditional. The globalConstraints to check player positions have been
 *  moved to update so that the player's position is tracked even if the player is not moving.
 *
 * */
Player.prototype.move = function (dt) {
    if (!this.hasCollided) {
        console.log(this.state);
        switch (this.state) {
            case "move_right" :
                if (this.x + this.constraints.gamePlay.steps <= globalConstraints.rightEdge) {
                    this.x = this.x + this.constraints.gamePlay.steps;
                    this.state = "stand";
                }
                break;

            case "move_left" :
                if (this.x - this.constraints.gamePlay.steps >= globalConstraints.leftEdge) {
                    this.x = this.x - this.constraints.gamePlay.steps;
                    this.state = "stand";
                }
                break;

            case "move_up" :
                if (this.y - this.constraints.gamePlay.steps > globalConstraints.topEdge) {
                    this.y = this.y - this.constraints.gamePlay.steps;
                    this.state = "stand";
                }
                break;


            case "move_down":
                if (this.y + this.constraints.gamePlay.steps <= globalConstraints.bottomEdge) {
                    this.y = this.y + this.constraints.gamePlay.steps;
                    this.state = "stand";
                }
                break;
        }
    }
};

/********************************** UPDATED CODE *******************************************************/
/*
 *  UPDATE -
 *  The checkCollision now is much more abstract. The actual condition to check for collision and the
 *  action to be taken has been moved to the entities themselves. This way plugging in  a new entity is as simple
 *  as defining the enitity with 2 methods checkCollision and onCollision and then adding the enitiy to the
 *  entities array in engine.js from where the player.update() is called.
 *
 * */

Player.prototype.checkCollision = function (entities) {
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if (this.x <= entity.x + 50 && this.x >= entity.x - 30) {
            if (entity.checkCollision(this)) {
                entity.onCollision(this);
            }
        }
    }
};

/********************************** DELETED CODE *******************************************************/
/*
 *  DELETE -
 *  The checkCollisionWithGem method has been removed in favour of more robust checkCollision
 *
 * */
//
// Player.prototype.checkCollisionWithGem = function () {
//     for (var i = 0; i < gems.length; i++) {
//         var gem = gems[i];
//         if (this.x <= gem.x + 50 && this.x >= gem.x - 30 &&
//             this.y <= gem.y - 50 && this.y <= gem.y + 30) {
//             if (!globalConstraints.updatingScore) {
//                 globalConstraints.updatingScore = true;
//                 this.updateScore(gem.points);
//                 gem.reset();
//             }
//         }
//     }
// };

Player.prototype.checkStonePathCrossingStatus = function () {
    if (this.side === "grass" && this.y <= -20) {
        if (!globalConstraints.updatingScore) {
            globalConstraints.updatingScore = true;
            this.updateScore(50);
            console.log("Reached water");
            console.log(this.x, this.y);
            this.side = "water";
        }
    } else if (this.side === "water" && this.y >= 260) {
        if (!globalConstraints.updatingScore) {
            globalConstraints.updatingScore = true;
            this.updateScore(50);
            console.log("Reached grass");
            this.side = "grass";
            gems[Math.floor(Math.random() * gems.length)].update(Math.floor(Math.random() * 8));
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
    return this.scores.length > 0 ? this.scores.sort().slice(-1) : 0;
};


Player.prototype.reset = function () {
    this.hasCollided = false;
    this.x = this.constraints.init.x;
    this.y = this.constraints.init.y;
    this.score = this.constraints.init.score;
    this.side = "grass";
};

/********************************** UPDATED CODE *******************************************************/
/*
 *  UPDATE -
 *  The settimeout function scope now accepts self as a parameter which in turn is bound to this, the player object
 *  in the current game.
 *
 * */
Player.prototype.updateScore = function (gemScore) {
    // Set timeout to handle the concurrency which arises due to the player reaching the other
    // end at the same y position as the gem.
    // This leads to a race condition. Settimeout fixes the issue.
    setTimeout(function () {
        self.score += gemScore;
        globalConstraints.updatingScore = false;
        globalConstraints.gameLevel = Math.floor(player.score / 200) + 1;
        console.log("Score - ", self.score);
        self.updateScoreElement();
    }(self = this), 0);
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

    this.move();
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
