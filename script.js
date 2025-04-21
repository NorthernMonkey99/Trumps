// script.js
const playerCard = document.getElementById("player-card");
const computerCard = document.getElementById("computer-card");
const statsDiv = document.getElementById("statistics");
const battleReportDiv = document.getElementById("battle-report");

const deck = [
    { name: "Cyber Warrior", power: 85, speed: 70, ability: "EMP Blast", effect: "Disables enemy shields (-10 power)", image: "images/cyber-warrior.png" },
    { name: "Mech Titan", power: 95, speed: 40, ability: "Heavy Slam", effect: "Extra damage (+5 power)", image: "images/mech-titan.png" },
    { name: "Shadow Assassin", power: 70, speed: 90, ability: "Silent Strike", effect: "Ignores enemy defenses (No counter)", image: "images/shadow-assassin.png" },
];

function playRound() {
    const playerDraw = deck[Math.floor(Math.random() * deck.length)];
    const computerDraw = deck[Math.floor(Math.random() * deck.length)];

    playerCard.style.backgroundImage = `url(${playerDraw.image})`;
    computerCard.style.backgroundImage = `url(${computerDraw.image})`;

    let playerPower = playerDraw.power;
    let computerPower = computerDraw.power;
    let battleReport = `🔹 ${playerDraw.name} uses **${playerDraw.ability}**! ${playerDraw.effect}<br>🔹 ${computerDraw.name} uses **${computerDraw.ability}**! ${computerDraw.effect}<br>`;

    // Apply special ability effects
    if (playerDraw.ability === "EMP Blast") {
        computerPower -= 10; // Cyber Warrior disables enemy shields
    } else if (playerDraw.ability === "Heavy Slam") {
        playerPower += 5; // Mech Titan gains extra power
    }

    if (computerDraw.ability === "EMP Blast") {
        playerPower -= 10;
    } else if (computerDraw.ability === "Heavy Slam") {
        computerPower += 5;
    }

    // Display warrior statistics
    statsDiv.innerHTML = `
        <strong>${playerDraw.name}:</strong> Power: ${playerPower}, Speed: ${playerDraw.speed}<br>
        <strong>${computerDraw.name}:</strong> Power: ${computerPower}, Speed: ${computerDraw.speed}
    `;

    // Determine the winner, apply flashing effect, and show winner stats in battle report
    playerCard.classList.remove("flashing");
    computerCard.classList.remove("flashing");

    if (playerPower > computerPower) {
        playerCard.classList.add("flashing");
        battleReport += `<strong>🔥 ${playerDraw.name} wins with Power: ${playerPower}!</strong>`;
    } else if (playerPower < computerPower) {
        computerCard.classList.add("flashing");
        battleReport += `<strong>🔥 ${computerDraw.name} wins with Power: ${computerPower}!</strong>`;
    } else {
        battleReport += "<strong>⚔️ It's a draw!</strong>";
    }

    battleReportDiv.innerHTML = battleReport;
}
