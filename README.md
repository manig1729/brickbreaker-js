# Brickbreaker

This is a simple, single - levelled version of the old classic that one used to find on many predecessors of smartphones, Brick-breaker. 

I made this game with the help of a few friends to test my knowledge of JavaScript, gain experience on the use of git and GitHub, and get used to the GitHub workflow.

### Installation
To simply play the game, you can visit the GitHub page of this project, which is
* https://manig1729.github.io/brickbreaker-js

If you want to play around with this code and/or contribute to it, you can fork this repository and then clone it from your GitHub.

### My Explanation of the code
I've tried to write the code in a very simple and straightforward manner, dividing the main components into separate files and then linking all files together.

The code has been written in an Object - Oriented Programming style, using classes for the ball, paddle and the bricks.

I haven't used any form of Data structures except normal JavaScript arrays in the code yet, but do plan on using stacks in a later stage.

### Mobile Implementation
The _Mobile version_ of the game is still in a rudimentary form and can be improved.

### Contributing
Do keep the following things in mind before sending pull requests.
* If adding a new visual feature, make sure that it goes with the pre-existing theme of the game - this includes both the general color scheme and the _stroked_ elements of the game.
* Try not to have absolute values (in pixels) for any quantity. Define stuff in terms of the canvas height, width, or other pre-existing variables. This makes scaling of the canvas much easier.