

const gameDiv = document.getElementById('game');

// Create 16 pexeso cards
function createCard(symbol) {
    for (let i = 0; i < 16; i++) {
        const flipCardContainer = document.createElement('div');
        flipCardContainer.classList.add('flip-card');

        const flipCardInner = document.createElement('div');
        flipCardInner.classList.add('flip-card-inner');

        const flipCardFront = document.createElement('div');
        flipCardFront.classList.add('flip-card-front');
        flipCardFront.textContent = 'Pex';

        const flipCardBack = document.createElement('div');
        flipCardBack.classList.add('flip-card-back');
        flipCardBack.textContent = symbol;

        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);

        flipCardContainer.appendChild(flipCardInner);

        gameDiv.appendChild(flipCardContainer);

        return flipCardContainer;
    }
}
const symbols = ['🌞', '🌈', '🍕', '🎉',
    '🐶', '🌸', '🌊', '🎮', '🍦', '🎵', '🚀', '📚', '⚽', '🍔', '🎈', '🐱'];

const size = 8;
const selectedSymbols = symbols.slice(0, size);
const doubleSymbols = selectedSymbols.concat(selectedSymbols);
const shuffledSymbols = doubleSymbols.sort(() => Math.random() - 0.5);
const flippedCards = [];


for (let i = 0; i < 2 * size; i++) {
    let card = createCard(shuffeldSymbols[i]);
    card.addEventListener('click', function() { 
        if(flippedCards.length < 2) {
            card.classList.add('flipped');
            flippedCards.push(card);
            card.classList.add('flipped');
        }
    

        if(flippedCards.length === 2) { 
            if(flippedCards[0].textContent === flippedCards[1].textContent) {
                for (let i = 0; i < flippedCards.length; i++) {
                flippedCards[i].classList.add('found');
                } 
            } else {
                setTimeout(function() {
                    for (let i = 0; i < flippedCards.length; i++) {
                    flippedCards[i].classList.remove('flipped');
                    }
                }, 1000);
            flippedCards = [];
            }
        } 
    });
}

       
    
