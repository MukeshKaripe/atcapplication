import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FlightinfoComponent } from './flightinfo/flightinfo.component';

const routes: Routes = [
  {path:'', component:HeaderComponent},
  {
    path:'banner', component:BannerComponent 
  },
  {
    path:'fi', component:FlightinfoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
