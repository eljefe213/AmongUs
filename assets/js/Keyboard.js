export default class Keyboard {
    constructor() {
        this.touchPressed = [];
        this.listen();
    }

    listen() {
        // quand on presse une touche
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown' ||
                e.key === 'ArrowLeft' || e.key === 'ArrowRight'
            ) {
                // si la touche pressée n'est pas déjà dans le tableau ...
                if (this.touchPressed.indexOf(e.key) === -1) {
                    // ... on l'ajoute 
                    this.touchPressed.push(e.key);
                }
                // On declenche un event en transmetttant la liste des touches
                document.dispatchEvent(new CustomEvent('player-move', { detail: this.touchPressed }));
            }
        });
        // quand on relache une touche
        document.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown' ||
                e.key === 'ArrowLeft' || e.key === 'ArrowRight'
            ) {
                let index = this.touchPressed.indexOf(e.key);
                if (index !== -1) this.touchPressed.splice(index, 1);

                // On declenche un event en transmetttant les touches pressés
                document.dispatchEvent(new CustomEvent('player-move', { detail: this.touchPressed }));
            }
        });
    }
}