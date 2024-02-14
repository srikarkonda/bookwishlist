import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  @Input()
  book!: book;

  @Output() selectedBook = new EventEmitter();
  isActive = false

}

export interface book {
  title: string
  subtitle: string
  authors: string[]
  publisher: string
  publishedDate: string
  description: string
  imageLinks: ImageLinks
}
export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}