import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Book} from "../models/book.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  //book:Book | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditBookComponent>,
    @Inject(MAT_DIALOG_DATA) public book:Book,) {
  }

  ngOnInit(): void {
  }

  submit(f:NgForm){
    if(!f.valid)
      return;

    this.dialogRef.close(this.book);
    //state change -> update

  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
