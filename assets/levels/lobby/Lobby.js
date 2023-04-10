import GameImage from '../../js/GameImage.js';

export default class Lobby {
    constructor() {
        this.background = new GameImage('assets/levels/lobby/lobby.png', 10, 15, 1220, 980);
        this.objects = [{ // La caisse
                src: new GameImage('assets/levels/lobby/lobby.png', 1248, 400, 106, 146),
                x: 350,
                y: 300,
                w: 105,
                h: 140,
                scale: { x: 1, y: 1 }
            },
            { // Le PC sur la caisse
                src: new GameImage('assets/levels/lobby/lobby.png', 1365, 400, 78, 68),
                x: 380,
                y: 300,
                w: 50,
                h: 50,
                scale: { x: 1, y: 1 }
            }
        ];
    }
}