export class Mothagotchi {
    lives = 3;
    upButton;
    downButton;
    leftButton;
    rightButton;
    mothagotchi;

    constructor() {
        this.upButton = document.getElementById("up");
        this.downButton = document.getElementById("down");
        this.leftButton = document.getElementById("left");
        this.rightButton = document.getElementById("right");
        this.mothagotchi = document.getElementById("Mothagotchi");

        this.upButton.addEventListener("click", () => {
            // move tomogatchi png up
            this.mothagotchi.style.top = (parseInt(this.mothagotchi.style.top) || 0) - 10 + "px";
            console.log("Button clicked!");
        });

        this.downButton.addEventListener("click", () => {
            this.mothagotchi.style.top = (parseInt(this.mothagotchi.style.top) || 0) + 10 + "px";
            console.log("Button clicked!");
        });

        this.leftButton.addEventListener("click", () => {
            this.mothagotchi.style.left = (parseInt(this.mothagotchi.style.left) || 0) - 10 + "px";
            console.log("Button clicked!");
        });

        this.rightButton.addEventListener("click", () => {
            this.mothagotchi.style.left = (parseInt(this.mothagotchi.style.left) || 0) + 10 + "px";
            console.log("Button clicked!");
        });

        console.log(`it has ${this.lives} lives`);
    }
}