import { Component, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ProductModel } from "../../../models/product-model";
import { ConfirmDialog } from "../confirm-dialog/confirm-dialog";

@Component({
    selector: 'create-product-dialog',
    templateUrl: 'create-product-dialog.html',
  })
  
  export class StoreProductDialog {
    productModel: ProductModel;
    public onAdd = new EventEmitter()
    constructor(public confirmDialog: MatDialog){
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
        // unsubscribe onAdd
        this.onAdd.emit();
      });
    }
  
    
  }
  