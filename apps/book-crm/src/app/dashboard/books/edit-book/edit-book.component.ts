// edit-book.component.ts

import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent {
  editBookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditBookComponent>,
    private booksService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {
    this.editBookForm = this.fb.group({
      title: [data.title, Validators.required],
      description: [data.description, Validators.required],
      authors: [data.authors.join(', '), Validators.required],
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.editBookForm.valid) {
      const updatedBook: Book = {
        id: this.data.id,
        title: this.editBookForm.value.title,
        description: this.editBookForm.value.description,
        authors: this.editBookForm.value.authors.split(',').map((author: string) => author.trim()),
      };

      this.booksService.editBook(updatedBook)
      this.dialogRef.close(updatedBook);
    }
  }
}
