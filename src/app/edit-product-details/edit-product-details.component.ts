import { Inject, Component, OnInit, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  id: string;
  title: string;
}

@Component({
  selector: 'app-edit-product-details',
  templateUrl: './edit-product-details.component.html',
  styleUrls: ['./edit-product-details.component.css'],
})
export class EditProductDetailsComponent implements OnInit {
  aciklama: string;
  satisAdedi: number;

  value = 'Clear me';
  constructor(
    public dialogRef: MatDialogRef<EditProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onClick(): void {
    this.dialogRef.close();
  }
}
