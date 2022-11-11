import { Inject, Component, OnInit, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  id: string;
  title: string;
  aciklama: string;
  satisAdedi: number;
}

@Component({
  selector: 'app-edit-product-details',
  templateUrl: './edit-product-details.component.html',
  styleUrls: ['./edit-product-details.component.css'],
})
export class EditProductDetailsComponent implements OnInit {
  value = 'Clear me';
  constructor(
    public dialogRef: MatDialogRef<EditProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onClick(): void {
    this.data.satisAdedi = Number(
      (<HTMLInputElement>document.getElementById('adet')).value
    );
    this.data.aciklama = (<HTMLInputElement>(
      document.getElementById('desc')
    )).value;
  }
}
