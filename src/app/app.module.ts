import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, ROUTES } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { YtComponent } from './components/yt/yt.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, YtComponent, NavBarComponent],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
