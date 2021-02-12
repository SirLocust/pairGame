import './style.css';
import './css/normalize.css'

import templateApp from './html/app.html'

import { UiRender } from './components/uiRender';
import { Card } from './components/card';
import { Deck } from './components/deck';
import { Checker } from './components/checker';

const body = document.querySelector('body') as HTMLBodyElement;


if(body){
  body.innerHTML = templateApp;
}


const deckHTML = document.getElementById('deck') as HTMLDivElement;
const formDeck = document.querySelectorAll('form input') as NodeListOf<HTMLInputElement>;
const btnCreate = document.getElementById('btnCreateDeck') as HTMLButtonElement;



const deck = new Deck();

const uI = new UiRender();

btnCreate.addEventListener('click', () =>{
  createDeck(Array.from(formDeck));
  uI.drawDeck(deck,deckHTML);
})


const createDeck = (inputList: HTMLInputElement[]):void =>{
  for(let input of  inputList){
    if(Boolean(input.value)){
      let pairValue = input.getAttribute('data-pair')!
      deck.addCard(new Card(pairValue,input.value));
    }
  }
}









// let deckList:Card[] = [
//   new Card( '1',"hola"),
//   new Card( '2',"school"),
//   new Card( '2',"escuela"),
//   new Card( '1',"hello"),
//   new Card( '3',"house"),
//   new Card( '3',"casa"),
  
// ]

// deck.addDeck(deckList);
const checker = new Checker(deck,deckHTML);


