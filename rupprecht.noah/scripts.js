document.addEventListener('DOMContentLoaded', () => {

    const cardsList = [
        {
            name: 'obs',
            image: 'images/obs.png'
        },
        {
            name: 'obs',
            image: 'images/obs.png'
        },
        {
            name: 'ubuntu',
            image: 'images/ubuntu.png'
        },
        {
            name: 'ubuntu',
            image: 'images/ubuntu.png'
        },
        {
            name: 'overwatch',
            image: 'images/overwatch.png'
        },
        {
            name: 'overwatch',
            image: 'images/overwatch.png'
        },
        {
            name: 'ig',
            image: 'images/ig.png'
        },
        {
            name: 'ig',
            image: 'images/ig.png'
        },
        {
            name: 'switch',
            image: 'images/switch.png'
        },
        {
            name: 'switch',
            image: 'images/switch.png'
        },
        {
            name: 'LOR',
            image: 'images/LOR.png'
        },
        {
            name: 'LOR',
            image: 'images/LOR.png'
        },
        {
            name: 'xbox',
            image: 'images/xbox.png'
        },
        {
            name: 'xbox',
            image: 'images/xbox.png'
        },
        {
            name: 'study',
            image: 'images/study.png'
        },
        {
            name: 'study',
            image: 'images/study.png'
        },
        {
            name: 'immortal',
            image: 'images/immortal.png'
        },
        {
            name: 'immortal',
            image: 'images/immortal.png'
        },
        {
            name: 'wa',
            image: 'images/wa.png'
        },
        {
            name: 'wa',
            image: 'images/wa.png'
        }
    ];
    cardsList.sort( () => 0.5 - Math.random() );
    const grid = document.querySelector('.gameGrid');
    const attemptsHolder = document.querySelector('.attemptsHolder');
    const foundHolder = document.querySelector('.foundHolder');
    const cardsInGame = 10;

    var attempts = 0
    var foundCards = 0
    attemptsHolder.textContent = attempts;
    foundHolder.textContent = foundCards;

    var chosenCards = [];
    var chosenCardsIds = [];

    function initiateBoard(){
        for (var i = 0; i < cardsList.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/placeholder.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }


    function flipCard(){
    if(chosenCards.length !== 2){
        var cardId = this.attributes["data-id"].value;
        if(this.attributes["src"].value !== 'images/blank.png'){
            chosenCards.push(cardsList[cardId].name);
            chosenCardsIds.push(cardId);
            this.setAttribute('src', cardsList[cardId].image);
            if(chosenCards.length === 2){
                setTimeout(checkForMatch, 400);
            }
        }
    }
}

    function checkForMatch(){
        attempts++;
        console.log(attempts)
        var cards = document.querySelectorAll('img');
        var firstCard = chosenCardsIds[0];
        var secondCard = chosenCardsIds[1];
        if (chosenCards[0] === chosenCards[1]){
            foundCards++;
            console.log(foundCards)
            cards[firstCard].setAttribute('src', 'images/blank.png');
            cards[secondCard].setAttribute('src', 'images/blank.png');
        }else{
            cards[firstCard].setAttribute('src', 'images/placeholder.png');
            cards[secondCard].setAttribute('src', 'images/placeholder.png');
        }
        chosenCards = [];
        chosenCardsIds = [];
        attemptsHolder.textContent = attempts;
        foundHolder.textContent = foundCards;
        if (foundCards === cardsInGame){
            alert('Gut gemacht!')
        }

    }

    initiateBoard();
})
