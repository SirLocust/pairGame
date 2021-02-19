import { IDeck } from './../components/interface/IDeck';
import { Deck } from '../components/deck';
import { GeneratorDeck } from '../components/generatorDeck';
import { UiRender } from '../components/uiRender';
import templateDeck  from './../html/selectDeck.html'
import { Checker } from '../components/checker';


export const selectedDeck = async (hashId: string) =>{
  let div = document.createElement('div');
  div.insertAdjacentHTML("beforeend", templateDeck)

  const deckHTML = div.querySelector('#deck') as HTMLDivElement;
  let tmpdeck = await getDeckById(parseInt(hashId)) as IDeck
  const deck = new Deck(tmpdeck.title,tmpdeck.id,tmpdeck.deckList);
  const uI = new UiRender();
  // const generatorDeck = new GeneratorDeck(deck,uI,deckHTML);
  uI.drawDeck(deck,deckHTML)
  const checker = new Checker(deck,deckHTML);



  return div;

}

const getDeckById = async (id:number): Promise<IDeck | null> =>{
  
  try {
    let response = await fetch(`http://localhost:8080/api/decks/${id}`)
    return  await response.json() as IDeck;   
  } catch (error) {
    return null;
  }
  
}


