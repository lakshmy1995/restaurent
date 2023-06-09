import { Component } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { FavoritesService } from '../service/favorites.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {
  term : string='';
  category: string='';

  getCategory(category:string){
    this.category = category;
  }

  public recipes:any[]=[
  
  ]

  constructor(public _menuService: MenuService, private _favoriteService: FavoritesService){
    this._menuService.getMenu()
  }

  
  addtoFavorites(recipe:any) {
    this._favoriteService.addToFavorites(recipe);
  }
  

}

  