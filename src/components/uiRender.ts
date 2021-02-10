import { Deck } from "./deck";

export class UiRender{

  drawDeck(deck:Deck, deckHTML: HTMLDivElement): void{
    deck.getDeck().forEach( (card) => {
      let div = document.createElement('div');
      div.classList.add('card','centerContent');
      div.setAttribute('id',card.id)
      let content = `
      <p class="card_content">${card.content}</p>
      `
      div.innerHTML = content
      deckHTML.appendChild(div)
    })
  }
}