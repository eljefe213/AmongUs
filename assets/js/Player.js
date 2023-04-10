import GameImage from './GameImage.js';
export default class Player {

    constructor() {
        this.base = new GameImage('assets/images/players/Base/idle.png', 0, 0, 165, 211);
        this.walk = [
            new GameImage('assets/images/players/Base/Walk0001.png', 0, 0, 178, 221),
            new GameImage('assets/images/players/Base/Walk0002.png', 0, 0, 178, 221),
            new GameImage('assets/images/players/Base/Walk0003.png', 0, 0, 178, 221),
            new GameImage('assets/images/players/Base/Walk0004.png', 0, 0, 178, 221),
            new GameImage('assets/images/players/Base/Walk0005.png', 0, 0, 178, 221),
            new GameImage('assets/images/players/Base/Walk0006.png', 0, 0, 178, 221),
            new GameImage('assets/images/players/Base/Walk0007.png', 0, 0, 178, 221),
            new GameImage('assets/images/players/Base/Walk0008.png', 0, 0, 178, 221),
            new GameImage('assets/images/players/Base/Walk0009.png', 0, 0, 178, 221),
            new GameImage('assets/images/players/Base/Walk0010.png', 0, 0, 178, 221),
            new GameImage('assets/images/players/Base/Walk0011.png', 0, 0, 178, 221),
            new GameImage('assets/images/players/Base/Walk0012.png', 0, 0, 178, 221),
        ];
        this.current = this.base;
        this.currentPos = 0;
        this.moveCountModulo = 0;
        this.position = { x: 450, y: 300, w: 55, h: 66, scale: { x: 1, y: 1 } };
        this.currentScale = { x: 1, y: 1 };
        this.listen();
    }
    listen() {
        document.addEventListener('player-move', (e) =>
            this.playerMove(e.detail));
    }
    playerMove(move) {
        this.moveCountModulo++;
        if (this.moveCountModulo % 3 == 0) this.changeImage((move.length != 0));
        if (move.indexOf('ArrowUp') !== -1) { this.position.y -= 5; }
        if (move.indexOf('ArrowDown') !== -1) { this.position.y += 5; }
        if (move.indexOf('ArrowLeft') !== -1) { this.position.scale.x = -1;
            this.position.x -= 5; }
        if (move.indexOf('ArrowRight') !== -1) { this.position.scale.x = 1;
            this.position.x += 5; }

        // effet mirroir horizontal
        if (this.position.scale.x !== this.currentScale.x) {
            this.position.w *= -1;
            this.position.x -= this.position.w;
            this.currentScale.x = this.position.scale.x;
        }
        // effet mirroir vertical
        if (this.position.scale.y !== this.currentScale.y) {
            this.position.h *= -1;
            this.position.y -= this.position.h;
            this.currentScale.y = this.position.scale.y;
        }
    }



    changeImage(move = true) {
        if (move) {
            this.currentPos++;
            if (this.currentPos > this.walk.length - 1) {
                this.currentPos = 0;
            }
            this.current = this.walk[this.currentPos];
        } else {
            // Si le joueur ne bouge plus on remet l'image de base
            this.currentPos = 0;
            this.current = this.base;
        }
    }
}