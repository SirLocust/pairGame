import { Card } from "./card";

export class Deck{

  deck: Card[];
  
  constructor(){
    this.deck = [];
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
    let card = this.getDeck().filter( card => card.getId() === id)
    return card[0];
  }
  shuffled(): void{
    this.deck = [...this.deck].sort( () => Math.random() - 0.5)
  }
}