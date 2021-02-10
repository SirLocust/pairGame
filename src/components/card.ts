import { ICard } from './interface/Icard';
export class Card implements ICard{

  static idCounter = 0;
  id:string
  content:string
  pairValue: string
  constructor(pairValue:string,content:string){
    this.content = content;
    this.pairValue = pairValue;
    Card.idCounter++;
    this.id = Card.idCounter.toString()
  }

  getPairValue(): string{
    return this.pairValue;
  }
  getId(): string{
    return this.id;
  }
  getContent(): string{
    return this.content;
  }
}