import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { TabViewModule } from 'primeng/tabview';
import { FlightinfoComponent } from './flightinfo/flightinfo.component';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HomeMComponent } from './home-m/home-m.component';
import { ChipModule } from 'primeng/chip';

import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FlightinfoComponent,
    HomeMComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CalendarModule,
    DropdownModule,
    BrowserAnimationsModule ,
    FormsModule,
    ChipModule,
    TabViewModule ,
    DialogModule,
    RadioButtonModule ,






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
