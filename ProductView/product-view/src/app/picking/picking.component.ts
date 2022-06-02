import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderModel } from '../models/order-model';
import { ProductModel } from '../models/product-model';



const ELEMENT_DATA: OrderModel[] = [
  {position: "warehouse", created: "01/01/2020", product: new ProductModel(), vendorId: 'Hw', amount: 1, unitPrice: 12.0, shippingStatus: "Unpacked"},
  {position: "warehouse", created: "01/01/2020", product: new ProductModel(), vendorId: 'Hw', amount: 1, unitPrice: 12.0, shippingStatus: "Unpacked"},
  {position: "warehouse", created: "01/01/2020", product: new ProductModel(), vendorId: 'Hw', amount: 1, unitPrice: 12.0, shippingStatus: "Unpacked"},
  {position: "warehouse", created: "01/01/2020", product: new ProductModel(), vendorId: 'Hw', amount: 1, unitPrice: 12.0, shippingStatus: "Unpacked"},
];

@Component({
  selector: 'picking',
  templateUrl: './picking.component.html',
  styleUrls: ['./picking.component.css']
})
export class PickingComponent implements OnInit {
  // position: string;
  //    created: string;
  //    product: ProductModel;
  //    vendorId: string;
  //    amount: number;
  //    unitPrice: number;
  //    shippingStatus: string;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumens: string[] = ['created', 'product', 'vendorId', 'amount', 'unitPrice', 'shippingStatus', 'actions'];
  constructor() { }

  ngOnInit(): void {
  }

}
