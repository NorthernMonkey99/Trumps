// script.js
const playerCard = document.getElementById("player-card");
const computerCard = document.getElementById("computer-card");
const result = document.getElementById("result");

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

    if (playerPower > computerPower) {
        result.innerHTML = `${playerDraw.name} wins with Power: ${playerPower}`;
    } else if (playerPower < computerPower) {
        result.innerHTML = `${computerDraw.name} wins with Power: ${computerPower}`;
    } else {
        result.innerHTML = "It's a draw!";
    }
}