'use strict';

var canvas;
var game;
var anim;

const PLAYER_HEIGHT = 100;
const PLAYER_WIDTH = 5;
const MAX_SPEED = 12;

//Dessine le terrain
function draw() {
    var context = canvas.getContext('2d');

    // Draw field
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw middle line
    // context.strokeStyle = 'white';
    // context.beginPath();
    // context.moveTo(canvas.width / 2, 0);
    // context.lineTo(canvas.width / 2, canvas.height);
    // context.lineTo((canvas.width / 2) + 1, canvas.height);
    // context.lineTo((canvas.width / 2) - 1, canvas.height);
    // context.stroke();

    // Dessine les traits du milieu
    let nb_traits = 30;
    let height_trait = canvas.height / nb_traits;
    for (let i = 1; i <= nb_traits; i++)
    {
        if (i % 2)
        {
            context.fillStyle = 'white';
            context.fillRect((canvas.width / 2) - (PLAYER_WIDTH / 2), height_trait * i, PLAYER_WIDTH, height_trait);
        }
    }
    // Draw players
    context.fillStyle = 'white';
    context.fillRect(0 + 5, game.player.y, PLAYER_WIDTH, PLAYER_HEIGHT);
    context.fillRect(canvas.width - PLAYER_WIDTH - 5, game.computer.y, PLAYER_WIDTH, PLAYER_HEIGHT);

    // Draw ball
    context.beginPath();
    context.fillStyle = 'white';
    let x_ball = game.ball.x - (PLAYER_WIDTH / 2);
    let y_ball = game.ball.y - (PLAYER_WIDTH / 2);
    context.fillRect(x_ball, y_ball, PLAYER_WIDTH, PLAYER_WIDTH);
}

//Ajout de l'aleatoire dans le rebond de la balle
function changeDirection(playerPosition) {
    var impact = game.ball.y - playerPosition - PLAYER_HEIGHT / 2;
    var ratio = 100 / (PLAYER_HEIGHT / 2);

    // Get a value between 0 and 10
    game.ball.speed.y = Math.round(impact * ratio / 10);
}

//Change la place de la bare du joueur
function playerMove(event) {
    // Get the mouse location in the canvas
    var canvasLocation = canvas.getBoundingClientRect();
    var mouseLocation = event.clientY - canvasLocation.y;

    if (mouseLocation < PLAYER_HEIGHT / 2) {
        game.player.y = 0;
    } else if (mouseLocation > canvas.height - PLAYER_HEIGHT / 2) {
        game.player.y = canvas.height - PLAYER_HEIGHT;
    } else {
        game.player.y = mouseLocation - PLAYER_HEIGHT / 2;
    }
}

//Change la place de la bare de l'ordinateur
function computerMove() {
    game.computer.y += game.ball.speed.y * game.computer.speedRatio;
}

//Les collisions
function collide(player) {
    // The player does not hit the ball
    if (game.ball.y < player.y || game.ball.y > player.y + PLAYER_HEIGHT) {
        reset();

        // Update score
        if (player == game.player) {
            game.computer.score++;
            document.querySelector('#computer-score').textContent = game.computer.score;
        } else {
            game.player.score++;
            document.querySelector('#player-score').textContent = game.player.score;
        }
    } else {
        // Change direction
        game.ball.speed.x *= -1;
        changeDirection(player.y);

        // Increase speed if it has not reached max speed
        if (Math.abs(game.ball.speed.x) < MAX_SPEED) {
            game.ball.speed.x *= 1.05;
        }
    }
}

//deplacement et rebond de la balle
function ballMove() {
    // Rebounds on top and bottom
    if (game.ball.y > canvas.height || game.ball.y < 0) {
        game.ball.speed.y *= -1;
    }

    if (game.ball.x > canvas.width - PLAYER_WIDTH) {
        collide(game.computer);
    } else if (game.ball.x < PLAYER_WIDTH) {
        collide(game.player);
    }

    game.ball.x += game.ball.speed.x;
    game.ball.y += game.ball.speed.y;
}

//Fonction de demarrage
function play() {
    draw();

    computerMove();
    ballMove();

    anim = setTimeout(play, 10);
}

//Remet a jour la position des elemens
function reset() {
    // Set ball and players to the center
    game.ball.x = canvas.width / 2;
    game.ball.y = canvas.height / 2;
    game.player.y = game.ball.y - PLAYER_HEIGHT / 2;
    game.computer.y = game.ball.y - PLAYER_HEIGHT / 2;

    // Reset speed
    game.ball.speed.x = 3;
    game.ball.speed.y = Math.random() * 3;
}

//Arrete le jeu
function stop() {
    clearTimeout(anim);

    reset();

    // Init score
    game.computer.score = 0;
    game.player.score = 0;

    document.querySelector('#computer-score').textContent = game.computer.score;
    document.querySelector('#player-score').textContent = game.player.score;

    draw();
}

//Charge le tout au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    canvas = document.getElementById('canvas');
    game = 
    {
        player:
        {
            score: 0
        },
        computer:
        {
            score: 0,
            speedRatio: 0.75
        },
        ball:
        {
            r: 5,
            speed: {}
        }
    };

    reset();

    // Mouse move event
    canvas.addEventListener('mousemove', playerMove);

    // Mouse click event
    document.querySelector('#start-game').addEventListener('click', play);
    document.querySelector('#stop-game').addEventListener('click', stop);

});