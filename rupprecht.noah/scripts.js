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
    const attemptsHolder1 = document.querySelector('.attemptsHolder1');
    const foundHolder1 = document.querySelector('.foundHolder1');
    const playerName1 = document.querySelector('.playerName1');
    const attemptsHolder2 = document.querySelector('.attemptsHolder2');
    const foundHolder2 = document.querySelector('.foundHolder2');
    const playerName2 = document.querySelector('.playerName2');
    const attemptsHolder3 = document.querySelector('.attemptsHolder3');
    const foundHolder3 = document.querySelector('.foundHolder3');
    const playerName3 = document.querySelector('.playerName3');
    const attemptsHolder4 = document.querySelector('.attemptsHolder4');
    const foundHolder4 = document.querySelector('.foundHolder4');
    const playerName4 = document.querySelector('.playerName4');
    const startButton = document.querySelector('.startButton');
    const playerCount = document.querySelector('.playerCount');
    const cardsInGame = 10;
    const players = [];

    var currentPlayer = 0;
    attemptsHolder1.textContent = 0;
    foundHolder1.textContent = 0;
    playerName1.textContent = "";
    attemptsHolder2.textContent = 0;
    foundHolder2.textContent = 0;
    playerName2.textContent = "";
    attemptsHolder3.textContent = 0;
    foundHolder3.textContent = 0;
    playerName3.textContent = "";
    attemptsHolder4.textContent = 0;
    foundHolder4.textContent = 0;
    playerName4.textContent = "";


    var chosenCards = [];
    var chosenCardsIds = [];

    startButton.addEventListener("click", initiateBoard)

    function initiateBoard(){
        if (Number(playerCount.value) < 0 || Number(playerCount.value) > 4) return;
        for (var i = 0; i < Number(playerCount.value); i++) {
            players.push({ name: "Spieler " + (i+1), attempts: 0, foundCards: 0 })
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
        updatePlayersCount();

        if (players[currentPlayer].foundCards === cardsInGame){
            alert('Gut gemacht!')
        }
        currentPlayer++;
        if(currentPlayer >= Number(playerCount.value)) currentPlayer = 0;
    }

    function updatePlayersCount() {
        attemptsHolder1.textContent = players[0].attempts;
        foundHolder1.textContent = players[0].foundCards;
        playerName1.textContent = players[0].name;
        if(players.length === 1) return;
        attemptsHolder2.textContent = players[1].attempts;
        foundHolder2.textContent = players[1].foundCards;
        playerName2.textContent = players[1].name;
        if(players.length  === 2) return;
        attemptsHolder3.textContent = players[2].attempts;
        foundHolder3.textContent = players[2].foundCards;
        playerName3.textContent = players[2].name;
        if(players.length  === 3) return;
        attemptsHolder4.textContent = players[3].attempts;
        foundHolder4.textContent = players[3].foundCards;
        playerName4.textContent = players[3].name;
    }
})
