// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
declarations: [],
imports: [
  BrowserModule,
  FormsModule,
  MainComponent,
  AppComponent,
  HttpClientModule
],
  providers: [],
  bootstrap: []
})
export class AppModule { }