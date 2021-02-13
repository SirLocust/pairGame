import { GeneratorDeck } from './components/generatorDeck';
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
};

const deckHTML = document.getElementById('deck') as HTMLDivElement;



const deck = new Deck();
const uI = new UiRender();


const generatorDeck = new GeneratorDeck(deck,uI,deckHTML);


const checker = new Checker(deck,deckHTML);








