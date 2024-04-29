import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import {  RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    DashboardModule,
    RouterModule,
  
  
   
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
