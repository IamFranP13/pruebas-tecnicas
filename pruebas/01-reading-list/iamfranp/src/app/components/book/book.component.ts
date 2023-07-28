import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'book-component',
  templateUrl: './book.component.html',
})
export class BookComponent {
  @Input() book!: Book;
  @Output() bookClicked: EventEmitter<Book> = new EventEmitter();

  onBookClick() {
    this.bookClicked.emit(this.book);
  }
}
