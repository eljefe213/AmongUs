import Player from "./Player.js";
import Keyboard from "./Keyboard.js";

export default class Game {
    constructor() {
        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");
        this.players = [];
    }

    drawGame() {
        // on vide tout le canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Afficher le personnage
        this.players[0].current.draw(
            this.ctx,
            this.players[0].position.x, this.players[0].position.y,
            this.players[0].position.w, this.players[0].position.h,
            this.players[0].currentScale.x, this.players[0].currentScale.y
        ).then(() => {
            this.ctx.restore();
        });


        // Appel récursif de la fonction permettant de dessiner le canvas
        window.requestAnimationFrame(this.drawGame.bind(this));
    }

    load() {
        // charger les différents données du jeu (niveau et joueur)
        this.players[0] = new Player();
        //mise en écoute du clavier
        (new Keyboard).listen();
        // 1. Charger un personnage
        this.drawGame();
    }
}