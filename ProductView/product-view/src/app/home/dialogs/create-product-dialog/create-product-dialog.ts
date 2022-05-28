import { Component, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DataServiceService } from "../../../services/data-service.service";
import { ProductModel } from "../../../models/product-model";
import { ConfirmDialog } from "../confirm-dialog/confirm-dialog";

import { Guid } from 'guid-typescript';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
    selector: 'create-product-dialog',
    templateUrl: 'create-product-dialog.html',
  })
  
  export class StoreProductDialog {
    productModel: ProductModel;
    public onAdd = new EventEmitter()
    constructor(public confirmDialog: MatDialog, public dataService: DataServiceService, private spinner: NgxSpinnerService){
      this.productModel =new ProductModel()
    }
  
    saveProduct(){
 
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
        this.spinner.show();
        this.productModel.productID = Guid.create().toString();
        this.productModel.vendorID = Guid.create().toString();
        this.dataService.addProduct(this.productModel).subscribe((data: any) => {
          this.spinner.hide();
          this.onAdd.emit();
        });
       
        
      });
    }
  
    
  }
  