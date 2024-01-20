import { Component, OnInit, ViewChild, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { Subscription, delay, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { BooksService } from '../../services/books-service'
@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrl: './search-books.component.css'
})
export class SearchBooksComponent /*implements  OnInit , OnDestroy  */ {

  private subs = new Subscription();

  displayedColumns: string[] = ['bookid', 'bookTitle', 'bookDescription', 'author', 'coverBase64', 'publishDate', 'lastModified'];


  books: any = []
  booksResponseArray: any;
  pageNumber = 1;
  isLoading = false;
  dataCount: boolean;
  @ViewChild('searchCriteria') searchCriteria: ElementRef;
  constructor(private booksservice: BooksService) { }

  searchBooks() {
    this.isLoading = false;
    this.booksservice.GetBooks(1, this.searchCriteria.nativeElement.value)
      .subscribe(data => {
        console.log(data.booksData);
        this.books = data.booksData;
        this.dataCount = this.books.length>0;
      })
      , (err: HttpErrorResponse) => {
        console.log(err);
      }
  }
  @HostListener("window:scroll", ["$event"])
  getScrollHeight(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !this.isLoading) {
      if (!this.isLoading) {
        console.log("bottom of the page");
        this.pageNumber += 1;
        this.fetchData()
          .pipe(
            tap()
          )
          .subscribe();
      }
    }
  }

  fetchData() {
    this.isLoading = true;
    return of(
      this.booksservice.GetBooks(this.pageNumber, this.searchCriteria.nativeElement.value)
        .subscribe(data => {
          this.booksResponseArray = data.booksData;
          this.books.push(data.booksData);
          if (this.booksResponseArray != '' && this.booksResponseArray != undefined && this.booksResponseArray != null) {
            for (var i = 0; i < this.booksResponseArray.length; i++) {
              this.books.push(this.booksResponseArray[i]);
            }
          }
        }), (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
}