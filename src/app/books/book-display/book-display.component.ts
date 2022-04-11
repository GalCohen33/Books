import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../models/book.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {
  @Input() book:Book | undefined;

  constructor() { }

  ngOnInit(): void {
  }


  submit(f:NgForm){
    if(!f.valid)
      return;

    //state change -> update

  }

}
