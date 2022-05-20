import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { ProductModel } from '../models/product-model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';




const ELEMENT_DATA: ProductModel[] = [
  {position: 1, created: "01/01/2020", productId: "1", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 21},
  {position: 2, created: "01/01/2020", productId: "1", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 343},
  {position: 3, created: "01/01/2020", productId: "1", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 12},
  {position: 4, created: "01/01/2020", productId: "1", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 55},
  {position: 5, created: "01/01/2020", productId: "1", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 1},
  {position: 6, created: "01/01/2020", productId: "1", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 21},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'created', 'productId', 'vendorId', 'size', 'unitPrice', 'productName', 'colour', 'category', 'brand', 'description', 'stockLevel'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  productModel: ProductModel =  new ProductModel(1, "01/01/2020", "1", "H", 1, 12.0, "Name", "Yellow", "Food", "Chair", "cha", 21);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowSelected(row: ProductModel){
    console.log(row)
    this.productModel = new ProductModel(row.position, row.created, row.productId, row.vendorId, row.size, row.unitPrice, row.productName, row.colour, row.category, row.brand, row.description, row.stockLevel)
    this.openDialog(this.productModel)
  }

  openDialog(productModel: ProductModel) {
    this.dialog.open(DialogElementsExampleDialog, {

      width: '30%',
      data: productModel} );
  }
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
  }
}

@Component({
  selector: 'product-dialog',
  templateUrl: 'product-dialog.html',
})

export class DialogElementsExampleDialog {
  productModel: ProductModel;
  edit: boolean = false;
  productId: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductModel){
    this.productModel = data;
    this.productId = data.productId;
  }

  toggleEdit(){
    this.edit = !this.edit;
  }

  saveProduct(){

  }
}