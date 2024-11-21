const gameDiv = document.getElementById("game");

const symbols = ["♠", "♣", "♥", "♦", "♤", "♧", "♡", "♢", "♠", "♣", "♥", "♦", "♤", "♧", "♡", "♢"];

for (let i = 0; i < 16; i++) {
    const flipCardDiv = document.createElement("div");
flipCardDiv.classList.add("flip-card");

const flipCardInnerDiv = document.createElement("div");
flipCardInnerDiv.classList.add("flip-card-inner");
flipCardDiv.appendChild(flipCardInnerDiv);

const flipCardFrontDiv = document.createElement("div");
flipCardFrontDiv.classList.add("flip-card-front");
flipCardInnerDiv.appendChild(flipCardFrontDiv);

const frontParagraph = document.createElement("p");
frontParagraph.textContent = "predek";
flipCardFrontDiv.appendChild(frontParagraph);

const flipCardBackDiv = document.createElement("div");
flipCardBackDiv.classList.add("flip-card-back");
flipCardInnerDiv.appendChild(flipCardBackDiv);

const backParagraph = document.createElement("p");
backParagraph.textContent = "zadek";
flipCardBackDiv.appendChild(backParagraph);
gameDiv.appendChild(flipCardDiv);
}