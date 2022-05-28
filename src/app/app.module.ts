import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactUsModule } from './contact/contact-us/contact-us.module';
import { HomeModule } from './home/home/home.module';
import { OurServicesModule } from './service/our-services/our-services.module';
import { FacilitiesComponent } from './home/facilities/facilities.component';
import { FutureworkComponent } from './home/futurework/futurework.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { Home1Component } from './home/home1/home1.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioModule } from './portfolio/portfolio.module';
import { MumbaiComponent } from './city/mumbai/mumbai.component';
import { PuneComponent } from './city/pune/pune.component';
import { CityModule } from './city/city/city.module';
import { BangaloreComponent } from './city/bangalore/bangalore.component';
import { NashikComponent } from './city/nashik/nashik.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    FutureworkComponent,
    AboutusComponent,
    Home1Component,
    HeaderComponent,
    FooterComponent,
   
    MumbaiComponent,
    PuneComponent,
    BangaloreComponent,
    NashikComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CityModule,
    
    ContactUsModule,
    HomeModule,
    OurServicesModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortfolioModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
