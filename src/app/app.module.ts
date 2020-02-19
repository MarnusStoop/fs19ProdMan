import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { FactoryDetailComponent } from './factory-detail/factory-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    MapDetailComponent,
    FactoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
