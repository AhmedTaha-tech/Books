import { RouterOutlet } from '@angular/router';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksService } from './services/books-service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
//  standalone: true,
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Books';
}
