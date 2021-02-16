import { router } from './routes/index.routes';
// import { GeneratorDeck } from './components/generatorDeck';
import './style.css';
import './css/normalize.css'

import homeTemplate from './html/home.html'

import { UiRender } from './components/uiRender';
import { Deck } from './components/deck';
import { Checker } from './components/checker';

window.location.hash = '#/'


window.addEventListener('hashchange', (event : HashChangeEvent)=>{
  
  router(window.location.hash)
})




// const deckHTML = document.getElementById('deck') as HTMLDivElement;

// const deck = new Deck();
// const uI = new UiRender();
// const generatorDeck = new GeneratorDeck(deck,uI,deckHTML);
// const checker = new Checker(deck,deckHTML);








