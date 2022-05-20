import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';


export interface ProductElement {
  position: number;
  created: string;
  productId: string;
  vendorId: string;
  size: number;
  unitPrice: number;
  productName: string;
  colour: string;
  category: string;
  brand: string;
  description: string;
  stockLevel: number;
}

const ELEMENT_DATA: ProductElement[] = [
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowSelected(row: ProductElement){
    console.log(row)
    this.openDialog()
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
  }
}

@Component({
  selector: 'product-dialog',
  templateUrl: 'product-dialog.html',
})
export class DialogElementsExampleDialog {}
