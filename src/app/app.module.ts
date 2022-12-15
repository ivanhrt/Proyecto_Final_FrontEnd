import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ElementsModule } from "./elements/elements.module";
import { FormsModule } from '@angular/forms';

import { MapaComponent } from './mapa/mapa.component';

import { HotelComponent } from './hotel/hotel.component';
import { VisorComponent } from './visor/visor.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReservasComponent } from './reservas/reservas.component';
import { RecargaMapsDirective } from './directives/recarga-maps.directive';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        RegisterComponent,
        SearchComponent,
        HotelComponent,
        VisorComponent,
        UsuarioComponent,
        ReservasComponent,
        RecargaMapsDirective,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ElementsModule,
        FormsModule,
    ]
})
export class AppModule { }
