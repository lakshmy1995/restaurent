import { Component } from '@angular/core';
import { FavoritesService } from '../service/favorites.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public totalrecipe : number = 0;

  constructor(private _favoriteService: FavoritesService){}

  ngOnInit():void{
    this._favoriteService.getMenus()
    .subscribe(res=>{
      this.totalrecipe=res.length;
    })
  }
}

