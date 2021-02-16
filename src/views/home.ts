import { ICard } from './../components/interface/Icard';
import { IDeck} from './../components/interface/IDeck'
import { Deck } from './../components/deck';

import homeTemplate from '../html/home.html'

export const home  = async () =>{
  
  let div = document.createElement('div')

  let deckListJson = await getDecks() as IDeck[];
  // console.log(await getDecks())
  let deckArray:Deck[] = [];
  
  deckListJson.forEach( (ele) => {
    let tmpDeck = new Deck(ele.title,ele.id,ele.deckList)
    deckArray.push(tmpDeck)

  })
  



  div.classList.add('flex_Center_row');
  div.insertAdjacentHTML('beforeend',homeTemplate)
  let grid = div.querySelector('#listDeck') as HTMLDivElement;
  deckArray.forEach( ele => {
    let content= `
    <div class="flex_Center_row">
      <div class="vDeck flex_Center_row" id="Deck${ele.id}">
        <p>${ele.title}</p>
      </div>
    </div>
    `
    grid.insertAdjacentHTML('beforeend',content)
    grid.querySelector(`#Deck${ele.id}`)?.addEventListener('click', () => {
      any(ele);
    })
  })
  return div;
}


const getDecks = async () =>{
  try {
    
    const response = await fetch('http://localhost:8080/api/decks')
    return await response.json()
  } catch (error) {
    console.log(error)
  }
  
}

const any = (deck:Deck) => {
  alert(deck.id)
  window.location.hash = '#/deckcreate'
}