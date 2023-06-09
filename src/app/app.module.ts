import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooktableComponent } from './booktable/booktable.component';
import { SpecialmenuComponent } from './specialmenu/specialmenu.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ChefdetailsComponent } from './chefdetails/chefdetails.component';
import { FooterComponent } from './footer/footer.component';
import { MenupageComponent } from './menupage/menupage.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FormsModule } from '@angular/forms';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooktableComponent,
    SpecialmenuComponent,
    TestimonialsComponent,
    ChefdetailsComponent,
    FooterComponent,
    MenupageComponent,
    OurstoryComponent,
    ContactusComponent,
    ContactformComponent,
    IngredientsComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
