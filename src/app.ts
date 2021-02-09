import './style.css';
import './css/normalize.css'
import sound from './assets/sound/failSound.wav'

import templateApp from './html/app.html'

let counterCliks = 0;
let whichCardSelect: string | null = '0'
let pairSelect = '0'
let failSound = new Audio(sound)


const body = document.querySelector('body') as HTMLBodyElement;

if(body){
  body.innerHTML = templateApp;
}

const deck = document.getElementById('deck') as HTMLDivElement;


let deckList = [
  { 
    id:'1',
    content:"name",
    pairValue:"1"
  },
  { 
    id:'2',
    content:"nombre",
    pairValue:"1"
  },
  { 
    id:'3',
    content:"wife",
    pairValue:"2"
  },
  { 
    id:'4',
    content:"esposa",
    pairValue:"2"
  }
  ,
  { 
    id:'5',
    content:"class",
    pairValue:"3"
  },
  { 
    id:'6',
    content:"clase",
    pairValue:"3"
  }
]

const drawDeck = () => {
  
  deckList.forEach( (card) => {
    let div = document.createElement('div');
    div.classList.add('card','centerContent');
    div.setAttribute('id',card.id)
    let content = `
    <p class="card_content">${card.content}</p>
    `
    div.innerHTML = content
    deck.appendChild(div)
  })
}
drawDeck()


const searchPairCard = (id:string) =>{
  let card = deckList.filter( ele => ele.id === id)
  return card[0].pairValue
}



deck.addEventListener('click', (event: MouseEvent) => {
  let card = event.target as HTMLDivElement
  if(card.classList.contains('card_content')){
    counterCliks++;
    
    let cardSelect = card.parentElement
    let idCard = ''
    if(cardSelect){
      
      idCard  = cardSelect.getAttribute('id') as string
    }
    let pairCard = searchPairCard(idCard);
    console.log(pairSelect,pairCard,counterCliks)
    
    if(counterCliks === 1 ){

      
      cardSelect?.classList.add('card_on');
      pairSelect = pairCard;
      whichCardSelect = idCard
    console.log(pairSelect,pairCard,counterCliks)
    console.log('srr')

    }
    else if(counterCliks === 2 && whichCardSelect === idCard){
      
      cardSelect?.classList.remove('card_on');
      counterCliks = 0;
      console.log('sq')

    }else if(counterCliks === 2 && pairSelect === pairCard){
      console.log('entro')
      cardSelect?.classList.remove('card')
      cardSelect?.classList.add('card_off')
      cardSelect?.children[0].classList.remove('card_content')
      let preCard = document.getElementById(whichCardSelect!);
      preCard?.classList.remove('card','card_on')
      preCard?.classList.add('card_off')
      preCard?.children[0].classList.remove('card_content')

      counterCliks = 0;
    }else {
      let preCard : HTMLElement | null
      if(whichCardSelect){
        failSound.play();
        preCard = document.getElementById(whichCardSelect);
        preCard?.classList.remove('card_on')
        preCard?.classList.add('card_fail')
       setTimeout(()=>{
        preCard?.classList.remove('card_fail')
       },600)
      }

      counterCliks = 0;
    }
    // console.log(card.parentElement?.getAttribute('id'))
  }
})
