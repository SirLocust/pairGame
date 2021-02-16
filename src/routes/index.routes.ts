import { home } from './../views/home';



const rootContaier = document.getElementById('root') as HTMLDivElement;

export const router = async (route: string) =>{
cleanHtml(rootContaier)
  switch(route){
    case '#/':
      let nodo = await home()
      rootContaier.appendChild(nodo);
      return ;
    case '#/deckcreate':
      return;
  }

}

const cleanHtml = (nodo : HTMLElement )=> {
  while(nodo.childNodes.length > 0){
    nodo.lastChild?.remove();
  }
}