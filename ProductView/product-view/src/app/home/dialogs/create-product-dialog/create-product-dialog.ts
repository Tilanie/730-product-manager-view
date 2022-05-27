import { Component, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DataServiceService } from "../../../services/data-service.service";
import { ProductModel } from "../../../models/product-model";
import { ConfirmDialog } from "../confirm-dialog/confirm-dialog";

import { Guid } from 'guid-typescript';


@Component({
    selector: 'create-product-dialog',
    templateUrl: 'create-product-dialog.html',
  })
  
  export class StoreProductDialog {
    productModel: ProductModel;
    public onAdd = new EventEmitter()
    constructor(public confirmDialog: MatDialog, public dataService: DataServiceService){
      this.productModel =new ProductModel()
    }
  
    saveProduct(){
      //@TODO
      this.openConfirmDialog(this.productModel)
    }
  
    openConfirmDialog(product: ProductModel): void {
      const dialogRef = this.confirmDialog.open(ConfirmDialog, {
        width: '250px',
        data: product,
      }
      );
      const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
        this.onAdd.emit();
      });
      dialogRef.afterClosed().subscribe(() => {
       
        this.productModel.productID = Guid.create();
        this.productModel.vendorID = Guid.create();
        this.dataService.addProduct(this.productModel);
       
        this.onAdd.emit();
      });
    }
  
    
  }
  