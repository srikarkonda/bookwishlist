import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { book } from '../components/book/book.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  bookWishList: book[]=[];
  getBooks(book:string)
  {
    return this.http.get(['https://www.googleapis.com/books/v1/volumes?q',book].join('=')).pipe(map((val:any) => { 
      return val?.items?.map((book:any)=> book.volumeInfo)}));
  }
}
