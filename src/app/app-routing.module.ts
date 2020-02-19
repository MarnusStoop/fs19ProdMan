import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { FactoryDetailComponent } from './factory-detail/factory-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/maps', pathMatch: 'full' },
  { path: 'maps', component: MapsComponent },
  { path: 'mapdetails/:mapid', component: MapDetailComponent },
  { path: 'factoryDetails/:mapid/:factoryId', component: FactoryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
