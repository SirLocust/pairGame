import { Card } from "./card";
import { Deck } from "./deck";
import { UiRender } from "./uiRender";

export class GeneratorDeck{

  btnCreate = document.getElementById('btnCreateDeck') as HTMLButtonElement;
  deck: Deck
  ui:UiRender
  deckHtml: HTMLDivElement
  formDeck = document.querySelectorAll('form input') as NodeListOf<HTMLInputElement>;
  constructor(deck: Deck, UiRender: UiRender , deckHtml: HTMLDivElement){
    this.deckHtml = deckHtml;
    this.deck = deck;
    this.ui = UiRender;
    this.btnCreate.addEventListener('click', () =>{
      this.createDeck(Array.from(this.formDeck));
      this.ui.drawDeck(deck,this.deckHtml);
    })
  }

  
  createDeck = (inputList: HTMLInputElement[]):void =>{
  for(let input of  inputList){
    if(Boolean(input.value)){
      let pairValue = input.getAttribute('data-pair')!
      this.deck.addCard(new Card(pairValue,input.value));
    }
  }
}
  
}