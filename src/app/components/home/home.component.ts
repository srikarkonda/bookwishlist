import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { error } from 'console';
import { book } from '../book/book.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  books: book[] = [];
  constructor(private apiService: ApiService) {}
  search(event: any) {
    console.log(event);
    this.apiService.getBooks(event?.srcElement?.value).subscribe({
      next:(books:book[])=> {
          this.books = books
          console.log(this.books)
      },
      error: (err)=> {
          console.log(err)
      },
    })
  }

  selectedBook(book:book)
  {
    if(this.apiService.bookWishList.findIndex(books=> (books.title === book.title && books.publisher === book.publisher)) === -1)
    {
      this.apiService.bookWishList.push(book)
    }
  }
}
