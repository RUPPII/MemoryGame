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
    const startButton = document.querySelector('.startButton');
    const playerCount = document.querySelector('.playerCount');
    const cardsInGame = 10;
    const players = [];

    var currentPlayer = 0;
    attemptsHolder.textContent = 0;
    foundHolder.textContent = 0;

    var chosenCards = [];
    var chosenCardsIds = [];

    startButton.addEventListener("click", initiateBoard)

    function initiateBoard(){
        if (Number(playerCount.value) < 0 || Number(playerCount.value) > 4) return;
        if(playerCount.value){
            for (var i = 0; i < playerCount; i++) {
                players.push({ name: "player" + i, attempts: 0, foundCards: 0 })
            }
        } else {
            players.push({ name: "single-player" , attempts: 0, foundCards: 0 })
        }
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
        players[currentPlayer].attempts++;
        console.log(players[currentPlayer].attempts)
        var cards = document.querySelectorAll('img');
        var firstCard = chosenCardsIds[0];
        var secondCard = chosenCardsIds[1];
        if (chosenCards[0] === chosenCards[1]){
            players[currentPlayer].foundCards++;
            console.log(players[currentPlayer].foundCards)
            cards[firstCard].setAttribute('src', 'images/blank.png');
            cards[secondCard].setAttribute('src', 'images/blank.png');
        }else{
            cards[firstCard].setAttribute('src', 'images/placeholder.png');
            cards[secondCard].setAttribute('src', 'images/placeholder.png');
        }
        chosenCards = [];
        chosenCardsIds = [];
        attemptsHolder.textContent = players[currentPlayer].attempts;
        foundHolder.textContent = players[currentPlayer].foundCards;
        if (players[currentPlayer].foundCards === cardsInGame){
            alert('Gut gemacht!')
        }
        currentPlayer++;
        if(currentPlayer > Number(playerCount.value)) currentPlayer = 0;
    }
})
