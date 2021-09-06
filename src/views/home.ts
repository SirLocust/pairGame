import { IDeck} from './../components/interface/IDeck'
import { Deck } from './../components/deck';

import homeTemplate from '../html/home.html'

export const home  = async ():Promise<HTMLDivElement> =>{
  
  const div = document.createElement('div')
  div.classList.add('flex_Center_row');
  div.insertAdjacentHTML('beforeend',homeTemplate)
  const grid = div.querySelector('#listDeck') as HTMLDivElement;

  const deckListJson = await getDecks();
  if(!deckListJson){
    return div;
  }
  const deckArray:Deck[] = [];
  
  deckListJson.forEach( (ele) => {
    const tmpDeck = new Deck(ele.title,ele.id,ele.deckList)
    deckArray.push(tmpDeck)
  })

  deckArray.forEach( ele => {
    const content= `
    <div class="flex_Center_row">
      <div class="vDeck flex_Center_row" id="Deck${ele.id}">
        <p>${ele.title}</p>
      </div>
    </div>
    `
    grid.insertAdjacentHTML('beforeend',content)
    grid.querySelector(`#Deck${ele.id}`)?.addEventListener('click', () => {
      navigationRouter(ele.id);
    })
  })
  return div;
}


const getDecks = async ():Promise<IDeck[] | null> =>{
  try {
    
    const response = await fetch('http://localhost:8080/api/decks')
    return await response.json() as IDeck[]
  } catch (error) {
    console.log(error)
    return null;
  }
  
}

const navigationRouter = (id: number) => {
  
  window.location.hash = `#/deck/${id}`
}