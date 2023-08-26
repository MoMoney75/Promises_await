let base_url = 'https://deckofcardsapi.com/api/deck/';
let draw2Button = document.getElementById('draw2Button')
let container = document.getElementById('container')

//1
async function drawCard(){
    let response = await axios.get(`${base_url}/new/draw`)
    console.log(response.data.cards[0].suit)
    console.log(response.data.cards[0].value)
}
drawCard()


    

//2
async function draw2Cards(){
    let firstCard = await axios.get(`${base_url}new/draw`)
    let firstCardImageSRC = firstCard.data.cards[0].image
    let deck_id = firstCard.data.deck_id
    let secondCard = await axios.get(`${base_url}${deck_id}/draw`)
    let secondCardCardImageSRC = secondCard.data.cards[0].image
    container.innerHTML = `<img src=${firstCardImageSRC}> <img src=${secondCardCardImageSRC}>`
    
}
draw2Button.addEventListener('click', draw2Cards)


//3
async function setup(){
    let draw1Button = document.getElementById('draw1Button');
    deck = await axios.get(`${base_url}new/shuffle/?deck_count=1`);
   
    draw1Button.addEventListener('click', async function(){    
    deck_id = deck.data.deck_id
    card = await axios.get(`${base_url}${deck_id}/draw`)
    card_src= card.data.cards[0].image
    container.innerHTML = `<img src=${card_src}>`
    
 if(deck.data.remaining === '0'){
    
    alert('all out of cards, please refresh to play aginst')
  
 }}
 )}
setup()










