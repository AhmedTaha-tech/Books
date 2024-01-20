import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IBooksData } from "../models/books-data";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: 'root'
  })

export class BooksService{
    private baseURL = 'https://localhost:7239';
    constructor(private http:HttpClient){}
    GetBooks(pageIndex:number,searchCriteria:string):Observable<IBooksData>{
        //const URL = `${environment.BaseURL}/api/V1/GetBooks?SearchCriteria=Osvteviuhhpa&PageIndex=1&PageSize=10`;
        const URL = `${this.baseURL}/api/V1/GetBooks?SearchCriteria=${searchCriteria}&PageIndex=${pageIndex}&PageSize=100`;
        return this.http.get<IBooksData>(URL);
    }
}