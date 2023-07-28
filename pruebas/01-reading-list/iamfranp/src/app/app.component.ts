import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Book} from "./models/book.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string = 'iamfranp'
  books: Book[] = []
  readingList: Book[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get<{library: {book: Book}[]}>("http://localhost:4200/assets/books.json")
      .subscribe((data) =>{
        console.log(data);
        this.books = data.library.map((item: {book: Book}) => {
          item.book.inReadingList = false;  
          return item.book;
        });
      })
  }

  handleBookClicked(book: Book) {
    if (book.inReadingList) {
      this.removeFromReadingList(book);
    } else {
      this.addToReadingList(book);
    }
  }

  addToReadingList(book: Book) {
    const index = this.books.findIndex(b => b.ISBN === book.ISBN);
    if (index > -1) {
      this.books.splice(index, 1);
      this.readingList.push(book);
      book.inReadingList = true;
    }
  }

  removeFromReadingList(book: Book) {
    const index = this.readingList.findIndex(b => b.ISBN === book.ISBN);
    if (index > -1) {
      this.readingList.splice(index, 1);
      this.books.push(book);
      book.inReadingList = false;
    }
  }
}
