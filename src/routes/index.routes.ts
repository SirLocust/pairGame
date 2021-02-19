import { selectedDeck } from './../views/selectDeck';
import { home } from './../views/home';





class Router{

  rootContaier = document.getElementById('root') as HTMLDivElement;
  constructor(){
    this.changeRouteTo(home())
  }

  async changeRouteTo(nodo: Promise<HTMLDivElement>): Promise<void>{
    this.cleanHtml(this.rootContaier)
    this.rootContaier.appendChild(await nodo);
  }

  whatRouteIs(hashTag: string):void{
    
    if(hashTag.includes('deck/')){
      let hashId: string =hashTag.split(/[\s\WA-z]+/g)[1]
      this.changeRouteTo(selectedDeck(hashId))
    }
    if(!hashTag || hashTag === '#'){
      this.changeRouteTo(home())
    }



  }

  private cleanHtml(nodo : HTMLElement ){
    while(nodo.childNodes.length > 0){
      nodo.lastChild?.remove();
    }
  }



}

export default Router;


// const rootContaier = document.getElementById('root') as HTMLDivElement;

// export const router = async (route: string) =>{
// cleanHtml(rootContaier)
//   switch(route){
//     case '#/':
//       let nodo = await home() 
      
//       return ;
//     case '#/deckcreate':
//       rootContaier.appendChild( await selectedDeck());
//       return;
//   }

// }

