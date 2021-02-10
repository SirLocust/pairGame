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





let deckList:Card[] = [
  new Card( '1',"hola"),
  new Card( '2',"school"),
  new Card( '2',"escuela"),
  new Card( '1',"hello"),
  new Card( '3',"house"),
  new Card( '3',"casa"),
  
]

const deck = new Deck();
const uI = new UiRender();
deck.addDeck(deckList);
uI.drawDeck(deck,deckHTML);
const checker = new Checker(deck,deckHTML);


