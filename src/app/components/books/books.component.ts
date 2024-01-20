import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { BooksService}  from '../../services/books-service'
import { IBooksData } from "../../models/books-data";
@Component({
  selector: 'books-search',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {

  private subs = new Subscription();

  displayedColumns: string[] = ['bookid', 'bookTitle', 'bookDescription', 'author', 'coverBase64', 'publishDate', 'lastModified'];
 
  public dataSource: MatTableDataSource<IBooksData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private dataArray: any;

  constructor(private booksservice : BooksService) { }

ngOnInit() {
  this.booksservice.GetBooks(1,'Osvteviuhhpa')
  .subscribe(data => {
    console.log(data.booksData);
    this.dataArray = data.booksData;
    this.dataSource = new MatTableDataSource<IBooksData>(this.dataArray);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }),(err: HttpErrorResponse) => {
    console.log(err);
  };
}
ngOnDestroy() {
  if (this.subs) {
    this.subs.unsubscribe();
  }
}
}
