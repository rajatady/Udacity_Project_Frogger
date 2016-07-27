Udacity Frogger Project
=======================


By [kumardivyarajat](https://profiles.udacity.com/u/kumardivyarajat)

This HTML5 canvas game has been created as part of the Front End
Nanodegree project for Udacity. The gameplay starts as soon as the
browser renders the webpage.

The goal of the game is to collect as many points as possible.

## Instructions to run the project

1. Download/Clone the project on your machine.
2. Open the file file:///path_where_project_is_downloaded/index.html from the downloaded/cloned folder in a web browser.
3. The game should run automatically.


## **Controls**

| Up Arrow           | Down Arrow           | Left Arrow           | Right Arrow           |
|:-------------------|:---------------------|:---------------------|:----------------------|
| Move the player Up | Move the player Down | Move the player Left | Move the player Right |


## Gameplay

The gameplay starts as soon as the webpage is rendered by the browser.
The character starts at the left bottom on the screen. The goal is to
cross the stone path without getting hit by the bugs. The gems will
arise on the water bank. Each gem arises only when the player
successfully crosses over from the water bank to the grass bank.


**Points Distribution**

| Cross The Stone Path | Grab a Green Gem | Grab a Blue Gem | Grab an Orange Gem |
|:---------------------|:-----------------|:----------------|:-------------------|
| 50 points            | 25 points        | 50 points       | 100 points         |


The game gets reset when the player hits a bug. The level of the game
increases on increments of 200 points scored. The highest score of for
the session along with the current score is shown in the fixed footer
below the game canvas.

_**Note:- The gem will only be  generated when the player reaches the grass bank from the water bank with or without collecting the gem.**_

## The Code Categorisation

There are three classes / pseudo-classes included in the project.


**1.Enemy.js** Contains all the code related to the enemy class.
Properties & methods include :-

    * x                 - The x position of the enemy
    * y                 - The y position of the enemy
    * sprite            - The image of each enemy
    * constraints       - The constratins for the enemy class
    * reset             - The reset method which reset the values of the enemies when the player collides with it
    * checkCollision    - The checkCollision method contains the conditions to check for collision with the player
    * onCollision       - The onCollison method defines the actions to be taken when the player collides with an enemy
    * move              - The method which moves the enemy
    * render            - The method used by the engine to render the enemies



**2.Player.js** Contains all the code related to the player class.
Properties & methods include :-

    * x                             - The x position of the player
    * y                             - The y position of the player
    * sprite                        - The image of the player
    * constraints                   - The constratins for the player class
    * state                         - The state of the player at any given point of time.
    * side                          - The end the player is on (Either grass or water)
    * score                         - Variable holding the score of the current game
    * scores                        - An array which holds all the scores by the player in the session.
    * update                        - The method which enables the player to be redrawn on input event
    * checkCollision                - Method which checks whether the player has collided with an entity
    * updateScoreElement            - Passes the score to the score DOM element
    * updateHighestScore            - Updates the highest score when the game is reset
    * getHighestScore               - Gets the highest score from the scores array
    * checkStonePathCrossingStatus  - Checks if the player has successfully crossed the stone path or not.
    * reset                         - The reset method which reset the values of the enemies when the player collides with it.
    * move                          - The method which moves the enemy
    * render                        - The method used by the engine to render the enemies.
    


**3.Gems.js** Contains all the code related to the gems class

Three classes, the OrangeGem, BlueGem and the GreenGem are the subclasses of the Gem class.

Properties & methods include :-

    * x                 - The x position of the gem
    * y                 - The y position of the gem
    * constraints       - The constratins for the gem class
    * sprite            - The image of each gem
    * checkCollision    - The checkCollision method contains the conditions to check for collision with the player
    * onCollision       - The onCollison method defines the actions to be taken when the player collides with a gem
    * reset             - The reset method which reset the values of the gems when the player collects it.
    * update            - The method which puts a gem in the first row randomly
    * render            - The method used by the engine to render the gems.


` ## The js/models/helper.js contains all the common 
variables which enable the game to work smoothly.`

## Updates

**enemy.js**

1. EDIT  - Changed the signature of the `enemy pseudo class`
2. EDIT  - `Update` method has been changed to operate on the player taken as parameter instead of on hardcoded global instance
3. ADD   - `checkCollision` method
4. ADD   - `onCollision` method
5. ADD   - `randomEnemySpeedGenerator` method
6. ADD   - `randomXGenerator` method

**player.js**

1. EDIT  - Changed the signature of the `player pseudo class`
2. EDIT  - `update` method has been changed to check for collision on every update
3. EDIT  - The `move` method now uses switch instead of if conditional. The globalConstraints to check player positions have been moved to update so that the player's position is tracked even if the player is not moving
4. EDIT  - The `checkCollision` now is much more abstract. The actual condition to check for collision and the
            action to be taken has been moved to the entities themselves. This way plugging in  a new entity is as simple
            as defining the enitity with 2 methods checkCollision and onCollision and then adding the enitiy to the
            entities array in engine.js from where the player.update() is called.
5. DEL   - The `checkCollisionWithGem` method has been removed in favour of more robust checkCollision
6. EDIT  - In the `updateScore` method, the settimeout function now accepts self as a parameter which in turn is bound to `this`, the player object
            in the current game.
            
**gems.js**

1. EDIT  - Changed the signature of the `gems pseudo class`
2. EDIT  - In the `reset` method, used local constraints instead of global constraints
3. ADD   - `gemResources` method. Resources have been moved here
4. ADD   - `getGemSprite` has been moves here from global scope
5. ADD   - `checkCollision` method - Contains collision constraints for gems
6. ADD   - `onCollision` method - Contains collision action to be taken


**helper.js**

1. EDIT  -  Removed all the `properties and methods` which are specific to a class

**app.js**

Refactored game logic to accommodate the changes in the structure of the other files. `Nothing major`.

**engine.js**

1. EDIT  - The player.update method now takes all the entities that can collide with the player as argument


           
