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
  id: number;
  title: string;

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
    'detail',
  ];

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data) => {
      this.product = data;
      console.log(this.product);
    });
  }

  getDetails(_id: number, _title: string) {
    const dialogRef = this.dialog.open(EditProductDetailsComponent, {
      width: '600px',
      data: { id: _id, title: _title },
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('Dialog result: ${result}');
    // });
  }
}
