import { ICard } from './interface/Icard';
import { Card } from "./card";

export class Deck{

  listCard: Card[];
  title: string
  id: number
  constructor( title: string, id: number,list :ICard[]){
    this.title = title
    this.id = id;
    this.listCard = this.deckFromJson(list);
  }

  getDeck(): Card[]{
    return this.listCard;
  }

  addDeck(moreCards:Card[]):void {
    this.listCard = [...this.listCard,...moreCards]
  }

  addCard(card:Card): void{
    this.listCard = [...this.listCard,card]
  }

  getCard(id:string): Card {
    let card = this.getDeck().filter( cardElm => cardElm.getIdAsString() === id)
    return card[0];
  }
  shuffled(): void{
    this.listCard = [...this.listCard].sort( () => Math.random() - 0.5)
  }

  deckFromJson(list :ICard[]):Card[]{
    let tmpDeck:Card[] = []
    list.forEach( ({id,pairValue,content}) =>{
      tmpDeck.push(new Card(pairValue,content,id))
    })
    return tmpDeck;
  }
  getMiddle():number{
    return this.listCard.length / 2
  }
}