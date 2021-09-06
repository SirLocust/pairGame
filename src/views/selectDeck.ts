import { IDeck } from './../components/interface/IDeck';
import { Deck } from '../components/deck';
import { UiRender } from '../components/uiRender';
import templateDeck  from './../html/selectDeck.html'
import { Checker } from '../components/checker';
import Score from '../components/score';


export const selectedDeck = async (hashId: string):Promise<HTMLDivElement> =>{
  const div = document.createElement('div');
  div.insertAdjacentHTML("beforeend", templateDeck)
  const deckHTML = div.querySelector('#deck') as HTMLDivElement;
  const tmpdeck = await getDeckById(parseInt(hashId)) as IDeck
  if(!tmpdeck){
    return div
  }
  const deck = new Deck(tmpdeck.title,tmpdeck.id,tmpdeck.deckList);
  const uI = new UiRender();
  uI.drawDeck(deck,deckHTML)
  const score = new Score(deck.getMiddle(),deckHTML)
  new Checker(deck,deckHTML,score);
  return div;

}

const getDeckById = async (id:number): Promise<IDeck | null> =>{
  
  try {
    const response = await fetch(`http://localhost:8080/api/decks/${id}`)
    return  await response.json() as IDeck;   
  } catch (error) {
    return null;
  }
  
}


