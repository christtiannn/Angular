import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { OwnerComponent } from './owner/owner.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListOwnerComponent } from './list-owner/list-owner.component';
import { HomeComponent } from './home/home.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OwnerComponent,
    ListOwnerComponent,
    HomeComponent,
    FormOwnerComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
