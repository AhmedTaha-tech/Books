import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { ScrollTrackerDirective } from './directives/load-more-books-directive';

@NgModule({
  exports: [BooksComponent],
  declarations: [
    AppComponent,
    BooksComponent,
    SearchBooksComponent,
    ScrollTrackerDirective,
  ],
  bootstrap:[AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
})
export class AppModule { }
