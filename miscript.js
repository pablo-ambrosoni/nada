let flippedCards = [];

function flipCard(card) {
    if (flippedCards.length < 2) {
        card.querySelector('img').style.display = 'block';
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const img1 = flippedCards[0].querySelector('img').src;
    const img2 = flippedCards[1].querySelector('img').src;

    if (img1 === img2) {
        flippedCards.forEach(card => card.style.visibility = 'hidden');
    } else {
        flippedCards.forEach(card => card.querySelector('img').style.display = 'none');
    }

    flippedCards = [];
}