import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './Lab4Component/lab4.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { SearchbarComponent } from './SearchBar/searchbar.component';
import { TopbannerComponent } from './TopBanner/topbanner.component';
import { CategorymenuComponent } from './CategoryMenu/categorymenu.component';
import { TodolistComponent } from './ToDoListComponent/todolist.component';
import { Homework3Component } from './Homework3/homwork3.component';
import { Homework3BannerComponent } from './Homework3Banner/homework3banner.component';
import { Homework3searchComponent } from './Homework3search/homework3search.component';
import { Homework3cardsComponent } from './Homework3Cards/homework3cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4Component,
    NavbarComponent,
    SearchbarComponent,
    TopbannerComponent,
    CategorymenuComponent,
    TodolistComponent,
    Homework3Component,
    Homework3BannerComponent,
    Homework3searchComponent,
    Homework3cardsComponent

  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
