let cardsDiv = document.getElementById('cards');
let actualCards = ["https://m.media-amazon.com/images/I/61R9e+OIEFS._AC_UF894,1000_QL80_.jpg", "https://images.saymedia-content.com/.image/t_share/MTc0NDYwNzUxNDkzMjExNzgy/how-to-play-the-card-game-scabby-queen-playing-for-raps.png", "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-joker-card-bigalbaloo-stock.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jack_of_clubs2.svg/1200px-Jack_of_clubs2.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/530px-Ace_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/1200px-7_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/706px-10_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/English_pattern_3_of_spades.svg/360px-English_pattern_3_of_spades.svg.png"]
let cardsPresent = [0,0,0,0,0,0,0,0];
let cardSrcs = [0,0,0,0,
                0,0,0,0,
                0,0,0,0,
                0,0,0,0];
let defaultCardSrcs = [];
let score = 0;
let scoreHeader = document.getElementById("score");
let resetButton = document.getElementById("reset");
for(let i = 0; i < 16; i++){
    let card = document.createElement('img');
    card.alt = "Card";
    card.src = "https://opengameart.org/sites/default/files/card%20back%20purple.png";
    defaultCardSrcs.push(card.src);
    card.setAttribute('class','card')
    cardsDiv.appendChild(card)
}

let cardsClicked = 0;
let allCards = document.querySelectorAll(".card");
let previouslyClickedIndex = "";
allCards.forEach((card, index) => {
    let randomIndex = Math.floor(Math.random()*actualCards.length);
    cardsPresent[randomIndex]++;
    cardSrcs[index] = actualCards[randomIndex];
    if(cardsPresent[randomIndex]>=2){
        actualCards.splice(randomIndex, 1);
        cardsPresent.splice(randomIndex, 1);
    }
    card.onclick = () => {
        scoreHeader.innerHTML = "Score: " + score;
        if(card.src=="https://opengameart.org/sites/default/files/card%20back%20purple.png"){
            cardsClicked++;
            score++;
            card.src = cardSrcs[index];
            if(cardsClicked>=2){
                if(card.src!=allCards[previouslyClickedIndex].src){
                    setTimeout(function(){
                        allCards.forEach( (card, index) => {
                            card.src = defaultCardSrcs[index];
                            cardsClicked = 0;
                        })
                    }, 1000); 
                } 
                else{
                    defaultCardSrcs[index] = card.src;
                    defaultCardSrcs[previouslyClickedIndex] = allCards[previouslyClickedIndex].src;
                } 
                
            }
            previouslyClickedIndex = index
        }
    }
});

resetButton.onclick = () =>{
    actualCards = ["https://m.media-amazon.com/images/I/61R9e+OIEFS._AC_UF894,1000_QL80_.jpg", "https://images.saymedia-content.com/.image/t_share/MTc0NDYwNzUxNDkzMjExNzgy/how-to-play-the-card-game-scabby-queen-playing-for-raps.png", "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-joker-card-bigalbaloo-stock.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jack_of_clubs2.svg/1200px-Jack_of_clubs2.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/530px-Ace_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/1200px-7_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/706px-10_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/English_pattern_3_of_spades.svg/360px-English_pattern_3_of_spades.svg.png"];
    cardsPresent = [0,0,0,0,0,0,0,0];
    cardSrcs = [0,0,0,0,
                0,0,0,0,
                0,0,0,0,
                0,0,0,0];
    score = 0; 
    scoreHeader.innerHTML = "Score: " + score;
    cardsClicked = 0;
    defaultCardSrcs = [];
    allCards.forEach( (card, index) =>{
        card.src = "https://opengameart.org/sites/default/files/card%20back%20purple.png";
        defaultCardSrcs.push(card.src);
        let randomIndex = Math.floor(Math.random()*actualCards.length);
        cardsPresent[randomIndex]++;
        cardSrcs[index] = actualCards[randomIndex];
        if(cardsPresent[randomIndex]>=2){
            actualCards.splice(randomIndex, 1);
            cardsPresent.splice(randomIndex, 1);
        }
    })
}