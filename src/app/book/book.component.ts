import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, OnInit,} from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../types/Book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  // with this code it is possible to add the selected books to the cart page

  addToCart() {
    this.cartService.add(this.book);
    this.isInCart = true;
  }
  // with this code it is possible to remove the selected books from the cart page

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
  // Sending data from Parent to child Component
  
  @Input() book: Book = {} as Book;

  isInCart: boolean = false;

  // Sending data from child component to parent Component
  // @Output() bookEmitter = new EventEmitter<Book>();


  constructor (private cartService: CartService) { }

  ngOnInit(): void {
    
  }

 

}

