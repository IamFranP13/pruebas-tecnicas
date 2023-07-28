import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
})
export class ReadingListComponent {
  @Input() readingList: Book[] = [];
  @Output() removedFromList: EventEmitter<Book> = new EventEmitter();

  removeFromList(book: Book) {
    this.removedFromList.emit(book);
  }
}
