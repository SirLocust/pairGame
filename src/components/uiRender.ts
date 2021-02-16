import { Deck } from "./deck";

export class UiRender{

  drawDeck(deck:Deck, deckHTML: HTMLDivElement): void{
    deck.shuffled();
    deck.getDeck().forEach( (card) => {
      let div = document.createElement('div');
      div.classList.add('card','centerContent');
      div.setAttribute('id',card.getIdAsString())
      let content = `
      <p class="card_content">${card.content}</p>
      `
      div.insertAdjacentHTML('beforeend',content)  
      deckHTML.appendChild(div)
    })
  }
}