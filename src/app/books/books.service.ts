import { Injectable } from '@angular/core';

//this means that this component is available in all components of the project
@Injectable(
  //providedIn: 'root'
)

export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: "Pro Angular",
        author: "Adam Freeman",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41r7+TqeYsL._SY344_BO1,204,203,200_.jpg",
        amount: 15,
      },
      {
        name: "Spring Boot, Angular",
        author: "D. Basilian",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51gvWmhCpZL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        amount: 28,
    
      },
      {
        name: "Learning Angular",
        author: "A. Bampakos",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41yavYgXumL._SX404_BO1,204,203,200_.jpg",
        amount: 56,
    
      },
      {
        name: "Angular Cookbook",
        author: "Ahsan Ayaz",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/411QTHyJ12L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        amount: 17.99,
    
      },
      {
        name: "Beginning Angular",
        author: "Greg Lim",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41POWmbj-9L.jpg",
        amount: 9.99,
    
      },
      {
        name: "Angular Router",
        author: "Viktor Savkin",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51roQ4-7XsL.jpg",
        amount: 17,
    
      },
      {
        name: "ASP NET Core, Angular",
        author: "De Santics",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41wVJH+vU9L._SX258_BO1,204,203,200_.jpg",
        amount: 37.99,
    
      },
      {
        name: "Essential Typescript",
        author: "A. Freeman",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41iL6ZZPBUL._SX348_BO1,204,203,200_.jpg",
        amount: 51.51,
    
      },
    
    ];
  }
}

// class Name {
//   constructor(name: string) {

//   }
// }
