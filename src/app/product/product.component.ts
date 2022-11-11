import { Component, OnInit } from '@angular/core';
import { Product, ProductDto } from '../model/product.model';
import { ProductService } from '../service/product.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { EditProductDetailsComponent } from '../edit-product-details/edit-product-details.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  _satisAdedi: Number[] = [];
  _aciklama: string[] = [];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  product: Product;
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'price',
    'discountPercentage',
    'rating',
    'stock',
    'brand',
    'category',
    'thumbnail',
    'satisAdedi',
    'detail',
  ];

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data) => {
      this.product = data;
    });
  }

  getDetails(_id: number, _title: string) {
    const dialogRef = this.dialog.open(EditProductDetailsComponent, {
      width: '600px',
      data: {
        id: _id,
        title: _title,
        aciklama: this._aciklama[_id - 1],
        satisAdedi: this._satisAdedi[_id - 1],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this._satisAdedi[_id - 1] = result.satisAdedi;
      this._aciklama[_id - 1] = result.aciklama;
    });
  }
}
