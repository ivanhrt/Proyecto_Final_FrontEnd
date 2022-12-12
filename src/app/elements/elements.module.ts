import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { NewformComponent } from './newform/newform.component';
import { MapaComponent } from '../mapa/mapa.component';
import { CartaloginComponent } from './cartalogin/cartalogin.component';
import { CartaloginenlaceComponent } from './cartaloginenlace/cartaloginenlace.component';
import { CartaregisterComponent } from './cartaregister/cartaregister.component';
import { CartaregisterenlaceComponent } from './cartaregisterenlace/cartaregisterenlace.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    SearchBarComponent,
    HomeCardsComponent,
    NewformComponent,
    MapaComponent,
    CartaloginComponent,
    CartaloginenlaceComponent,
    CartaregisterComponent,
    CartaregisterenlaceComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    SearchBarComponent,
    HomeCardsComponent,
    NewformComponent,
    MapaComponent,
    CartaloginComponent,
    CartaloginenlaceComponent,
    CartaregisterComponent,
    CartaregisterenlaceComponent,
  ]
})
export class ElementsModule { }
