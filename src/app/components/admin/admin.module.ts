import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';


const routes: Routes = [
  {path:'home',component:HomeComponent},
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),NgChartsModule
  ]
})
export class AdminModule { }
