import { ICard } from './interface/Icard';
import { Card } from "./card";

export class Deck{

  deck: Card[];
  title: string
  id: number
  constructor( title: string, id: number,list :ICard[]){
    this.title = title
    this.id = id;
    this.deck = this.deckFromJson(list);
  }

  getDeck(): Card[]{
    return this.deck;
  }

  addDeck(moreCards:Card[]):void {
    this.deck = [...this.deck,...moreCards]
  }

  addCard(card:Card): void{
    this.deck = [...this.deck,card]
  }

  getCard(id:string): Card {
    let card = this.getDeck().filter( cardElm => cardElm.getIdAsString() === id)
    return card[0];
  }
  shuffled(): void{
    this.deck = [...this.deck].sort( () => Math.random() - 0.5)
  }

  deckFromJson(list :ICard[]):Card[]{
    let tmpDeck:Card[] = []
    list.forEach( ({id,pairValue,content}) =>{
      tmpDeck.push(new Card(pairValue,content,id))
    })
    return tmpDeck;
  }
}