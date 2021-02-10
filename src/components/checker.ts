import { Card } from "./card";
import { Deck } from "./deck";
import soundFail from '../assets/sound/failSound.wav'
import soundGood from '../assets/sound/goodSound.ogg'
export class Checker{

  count: number = 0;
  card = new Card('0','0');
  deck: Deck;
  deckHTML: HTMLDivElement;
  failSound : HTMLAudioElement = new Audio(soundFail);
  goodSound : HTMLAudioElement = new Audio(soundGood);
  
  constructor(deck:Deck, deckHTML: HTMLDivElement){
    this.deck = deck;
    this.deckHTML = deckHTML;
    console.log(soundFail)
    deckHTML.addEventListener('click', (event) => {
      this.checking(event);
    })
  }

  checking(event : MouseEvent):void{
    let card = event.target as HTMLDivElement;
    
    if(!card.classList.contains('card_content')){
      return;
    }
    let cardHtml = card.parentElement!
    let idCard: string = cardHtml.getAttribute('id')!
    this.count++
    this.statusPick(cardHtml, idCard);

  }


  statusPick(cardHtml: HTMLElement, idCard:string):void{
    
    if(this.count === 1){
      this.firstSelectedCard(idCard,cardHtml);
    }

    if(this.count ===  2 && this.card.getId() === idCard){
      
      this.sameSelectedCard(cardHtml);
    }

    if(this.count === 2 && this.card.getPairValue() === this.deck.getCard(idCard).getPairValue() ){
      this.CorrectPairSelected(cardHtml);
    }
    if(this.count === 2 && this.card.getPairValue() !== this.deck.getCard(idCard).getPairValue() ){
      this.wrongPairSelected(cardHtml);
    }
  }



  private firstSelectedCard(idCard:string, cardHtml: HTMLElement):void {
    this.card = this.deck.getCard(idCard);
    cardHtml?.classList.add('card_on');
  }
  private sameSelectedCard(cardHtml: HTMLElement):void{
    cardHtml.classList.remove('card_on');
    this.count = 0;
  }
  private CorrectPairSelected(cardHtml: HTMLElement):void{
      this.goodSound.play();
      cardHtml?.classList.remove('card')
      cardHtml?.classList.add('card_off')
      cardHtml?.children[0].classList.remove('card_content')
      let preCard = document.getElementById(this.card.getId());
      preCard?.classList.remove('card','card_on')
      preCard?.classList.add('card_off')
      preCard?.children[0].classList.remove('card_content')
      this.count = 0;
  }
  private wrongPairSelected(cardHtml:HTMLElement){
        this.failSound.play();
        let preCard = document.getElementById(this.card.getId());
        preCard?.classList.remove('card_on')
        preCard?.classList.add('card_fail')
        setTimeout(()=>{
            preCard?.classList.remove('card_fail')
        },600)
        this.count = 0;
  }

}