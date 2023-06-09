import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  public favorites:any=[];

  public recipes = new BehaviorSubject<any>([]);

  constructor() { }
  
  getMenus(){
    return this.recipes.asObservable();
  }

  setMenus(recipes:any){
    this.favorites.push(...recipes);
    this.recipes.next(recipes);
  }

  addToFavorites(recipes:any){
    this.favorites.push(recipes);
    this.recipes.next(this.favorites);
    console.log(this.favorites);
  }

  removefavorites(recipes:any){
    this.favorites.map((a:any, index:any)=>{
      if(a.id === recipes.id){ // Compare id of the current item `a` with the id of the item to be removed
        this.favorites.splice(index,1);
      }
    });
    this.recipes.next(this.favorites);
  }

  removeallfavorites(){
    this.favorites=[];
    this.recipes.next(this.favorites);
  }

}
