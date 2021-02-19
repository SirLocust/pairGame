// import { router } from './routes/index.routes';
// import { GeneratorDeck } from './components/generatorDeck';
import './style.css';
import './css/normalize.css'

import Router from './routes/index.routes';

const router = new Router();

window.addEventListener('hashchange', (event : HashChangeEvent)=>{
  router.whatRouteIs(window.location.hash)
  // router()
})




// const deckHTML = document.getElementById('deck') as HTMLDivElement;

// const deck = new Deck();
// const uI = new UiRender();
// const generatorDeck = new GeneratorDeck(deck,uI,deckHTML);
// const checker = new Checker(deck,deckHTML);








