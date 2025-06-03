let lives = 3;

upButton = document.getElementById("up");
downButton = document.getElementById("down");
leftButton = document.getElementById("left");
rightButton = document.getElementById("right");
mothagotchi = document.getElementById("Mothagotchi");

upButton.addEventListener("click", () => {
    // move tomogatchi png up
    mothagotchi.style.top = (parseInt(mothagotchi.style.top) || 0) - 10 + "px";
    console.log("Button clicked!");
});

downButton.addEventListener("click", () => {
    mothagotchi.style.top = (parseInt(mothagotchi.style.top) || 0) + 10 + "px";
    console.log("Button clicked!");
})

leftButton.addEventListener("click", () => {
    mothagotchi.style.left = (parseInt(mothagotchi.style.left) || 0) - 10 + "px";
    console.log("Button clicked!");
});

rightButton.addEventListener("click", () => {
    mothagotchi.style.left = (parseInt(mothagotchi.style.left) || 0) + 10 + "px";
    console.log("Button clicked!");
});

console.log(`it has ${lives} lives`);
