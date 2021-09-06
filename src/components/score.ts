class Score{

  scoreToWin: number
  points = 0;
  html: HTMLDivElement;
  constructor( scoreToWin: number , html: HTMLDivElement){
    this.scoreToWin = scoreToWin;
    this.html = html;
  }

  increase(): void{
    this.points++;
  }
  getPoints():number{
    return this.points;
  }

  getScoreToWin():number{
    return this.scoreToWin;
  }

  checkScore( ):void{
    this.increase();
    if(this.getPoints() === this.getScoreToWin()){
      alert('Win');
    }
  }


}

export default Score;