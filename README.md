# battleship_js

## About

This project is following the Battleship Assignment in The Odin Project's Full Stack Ruby on Rails Javascript Course. See full details here: https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/battleship

The focus of this project was to use TDD to build the game "Battleship" against a computer.

This project uses:
* Javascript
* HTML
* CSS
* Webpack
* Jest
* Font Awesome Icons

## Gameplay

To start the game, move your cursor over the rendered grid on the left of the screen. The squares highlighted represents the location where your ship will be placed upon clicking. You can toggle your ship's orientation along the x and y axis by clicking the "Rotate" button. Once you have placed all your ships, the computer's grid will be rendered on the screen.

Click on a square in the computer's grid to make a move. If you hit one of the computer's ships, the square will render a red "X". If your shot missed, the square will render blue waves.

Immediately after your turn the computer will take it's shot.

When either player has sunk an enemy ship by hitting all of a ship's available coordinates, that player's score will increment by 1 and be shown on screen.

First player to sink all of the enemy ships wins.

## About computer opponent

The AI for the computer is a simple one -- selecting only available moves at random. For example, the computer won't select the same square twice and only selects squares that are in bounds. 

This could be made more sophisticated by giving the computer strategies to follow. For example, if computer scores a hit, keep shooting along x and y axis until ship is sunk.

## Getting started

### Quick start
You can play the game by visiting it's Github Pages url: https://jmorton138.github.io/battleship_js/



