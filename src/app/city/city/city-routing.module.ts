import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MumbaiComponent } from '../mumbai/mumbai.component';
import { PuneComponent } from '../pune/pune.component';
import { BangaloreComponent } from '../bangalore/bangalore.component';
import { NashikComponent } from '../nashik/nashik.component';

const routes: Routes = [
  {path:'mumbai', component:MumbaiComponent},
  {path:'pune' , component: PuneComponent},
  {path:'bangalore', component:BangaloreComponent},
  {path:'nashik', component:NashikComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
