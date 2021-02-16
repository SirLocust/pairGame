import { ICard } from './interface/Icard';
export class Card implements ICard{

  // static idCounter = 0;
  id:number
  content:string
  pairValue: string
  constructor(pairValue:string,content:string,id:number){
    this.content = content;
    this.pairValue = pairValue;
    this.id = id;
    // Card.idCounter++;
    // this.id = Card.idCounter.toString()
  }

  getPairValue(): string{
    return this.pairValue;
  }
  getIdAsString():string{
    return this.id.toString()
  }
  getId(): number{
    return this.id;
  }
  getContent(): string{
    return this.content;
  }
}