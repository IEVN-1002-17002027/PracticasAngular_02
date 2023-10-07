import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { TemperaturaComponent } from './temperatura/temperatura.component';
import { ExponenteComponent } from './exponente/exponente.component';
import { MenuComponent } from './menu/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { CinepolisComponent } from './cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    ExponenteComponent,
    MenuComponent,
    CinepolisComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }