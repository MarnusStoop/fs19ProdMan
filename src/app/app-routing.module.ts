import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WoodfactoryComponent } from './woodfactory/woodfactory.component';

const routes: Routes = [
  { path: 'woodfactory', component: WoodfactoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
