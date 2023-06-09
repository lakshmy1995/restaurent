import { Component } from '@angular/core';
import { FavoritesService } from '../service/favorites.service';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {

  public recipes:any=[];

  constructor(public _favoriteService: FavoritesService){
    this._favoriteService.getMenus().subscribe((data:any)=>{
      console.log(data); // check if data is being retrieved
      this.recipes=data;
    })
  }

  removeItem(item:any){
    this._favoriteService.removefavorites(item);
    this._favoriteService.getMenus().subscribe((data: any) => {
      this.recipes = data;
    });
    console.log(this._favoriteService.removefavorites(item));
  }

  removeAllItem(){
    this._favoriteService.removeallfavorites();
  }

}

  
