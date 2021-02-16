import { Card } from "./card";
import { Deck } from "./deck";
import { UiRender } from "./uiRender";

export class GeneratorDeck{

  btnCreate = document.getElementById('btnCreateDeck') as HTMLButtonElement;
  deck: Deck
  ui:UiRender
  deckHtml: HTMLDivElement
  formDeck = document.querySelectorAll('#formCreateDeck input') as NodeListOf<HTMLInputElement>;
  constructor(deck: Deck, uiRender: UiRender , deckHtml: HTMLDivElement){
    this.deckHtml = deckHtml;
    this.deck = deck;
    this.ui = uiRender;
    this.btnCreate.addEventListener('click', () =>{
      this.createDeck(Array.from(this.formDeck));
      this.ui.drawDeck(deck,this.deckHtml);
    })
  }

  
  createDeck = (inputList: HTMLInputElement[]):void =>{
  
  inputList.forEach( (input,index) => {
    if(Boolean(input.value)){
      let pairValue = input.getAttribute('data-pair')!
      this.deck.addCard(new Card(pairValue,input.value,index));
    }
  })
}
  
}