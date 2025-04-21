// script.js
const playerCard = document.getElementById("player-card");
const computerCard = document.getElementById("computer-card");
const statsDiv = document.getElementById("statistics");

const deck = [
    { name: "Cyber Warrior", power: 85, speed: 70, image: "images/cyber-warrior.png" },
    { name: "Mech Titan", power: 95, speed: 40, image: "images/mech-titan.png" },
    { name: "Shadow Assassin", power: 70, speed: 90, image: "images/shadow-assassin.png" },
];

function playRound() {
    const playerDraw = deck[Math.floor(Math.random() * deck.length)];
    const computerDraw = deck[Math.floor(Math.random() * deck.length)];

    playerCard.style.backgroundImage = `url(${playerDraw.image})`;
    computerCard.style.backgroundImage = `url(${computerDraw.image})`;

    const playerPower = playerDraw.power;
    const computerPower = computerDraw.power;

    // Display warrior statistics
    statsDiv.innerHTML = `
        <strong>${playerDraw.name}:</strong> Power: ${playerPower}, Speed: ${playerDraw.speed}<br>
        <strong>${computerDraw.name}:</strong> Power: ${computerPower}, Speed: ${computerDraw.speed}
    `;

    // Determine the winner and apply flashing border
    playerCard.classList.remove("flashing");
    computerCard.classList.remove("flashing");

    if (playerPower > computerPower) {
        playerCard.classList.add("flashing");
    } else if (playerPower < computerPower) {
        computerCard.classList.add("flashing");
    }
}
