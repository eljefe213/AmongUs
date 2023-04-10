export default class GameImage {
    constructor(src, x = 0, y = 0, width = 0, height = 0) {
        this.image = new Image();
        this.image.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx, dx = null, dy = null, dLargeur = null, dHauteur = null, scaleX = 1, ScaleY = 1) {
        return new Promise((resolve) => {
            let image = this.image;
            // Si il y a un flip à faire sur l'image
            if (scaleX !== 1 || ScaleY !== 1) {
                image = this.drawFlip(scaleX, ScaleY);
            }
            ctx.drawImage(image, this.x, this.y, this.width, this.height,
                dx || 0,
                dy || 0,
                dLargeur || this.width,
                dHauteur || this.height
            );
            resolve();
        });
    }

    drawFlip(scaleX = 1, scaleY = 1) {
        // on doit créer un canvas provisoire pour re-dessiner l'image dans un autre sens (flip)
        let canvasCopy = document.createElement("canvas");
        let copyContext = canvasCopy.getContext("2d");
        canvasCopy.width = this.width;
        canvasCopy.height = this.height;

        // permet de repositionner le canvas
        copyContext.translate(this.width, 0);
        // permet de faire le flip de l'image
        copyContext.scale(scaleX, scaleY);
        // dessine l'image dans le canvas provisoire
        copyContext.drawImage(this.image, 0, 0, this.width, this.height);

        return canvasCopy;
    }
}