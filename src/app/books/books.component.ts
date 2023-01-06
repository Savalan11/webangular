import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  
books: Book[] = [];
//by identifying dependency injection angular automatically issues for us the list of books envisaged in books.service.ts

constructor (private booksService: BooksService) {}

isShowing: boolean = true;

  ngOnInit(): void {
    this.books =this.booksService.getBooks()
}

}