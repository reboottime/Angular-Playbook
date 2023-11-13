import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  addBookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    public dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addBookForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      authors: ['', Validators.required],
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    const isValidBookData = this.addBookForm.valid;
    const { authors, ...bookMetadata } = this.addBookForm.value;

    if (isValidBookData) {
      this.booksService.addBook({
        ...bookMetadata,
        authors: authors.split(',')
      }).subscribe({
        complete: () => {
          this.booksService.fetchBooks();
          this.dialogRef.close();
        },
        error: () => { }
      })
    }
  }
}
