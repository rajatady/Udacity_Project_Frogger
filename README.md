Udacity Frogger Project
=======================


By [kumardivyarajat](https://profiles.udacity.com/u/kumardivyarajat)

This HTML5 canvas game has been created as part of the Front End
Nanodegree project for Udacity. The gameplay starts as soon as the
browser renders the webpage.

The goal of the game is to collect as many points as possible.

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

    * x      - The x position of the enemy
    * y      - The y position of the enemy
    * sprite - The image of each enemy
    * reset  - The reset method which reset the values of the enemies when the player collides with it.
    * move   - The method which moves the enemy
    * render - The method used by the engine to render the enemies.



**2.Player.js** Contains all the code related to the player class.
Properties & methods include :-

    * x                             - The x position of the player
    * y                             - The y position of the player
    * sprite                        - The image of the player
    * state                         - The state of the player at any given point of time.
    * side                          - The end the player is on (Either grass or water)
    * score                         - Variable holding the score of the current game
    * scores                        - An array which holds all the scores by the player in the session.
    * update                        - The method which enables the player to be redrawn on input event
    * checkCollision                - Method which checks whether the player has collided with the bug
    * checkCollisionWithGem         - Checks if the player has collected the gem
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

    * x      - The x position of the gem
    * y      - The y position of the gem
    * sprite - The image of each gem
    * reset  - The reset method which reset the values of the gems when the player collects it.
    * update - The method which puts a gem in the first row randomly
    * render - The method used by the engine to render the gems.


` ## The js/models/helper.js contains all the common helper methods and
variables which enable the game to work smoothly.`

