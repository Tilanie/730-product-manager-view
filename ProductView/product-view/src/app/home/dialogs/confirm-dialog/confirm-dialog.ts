import { Component, EventEmitter, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProductModel } from "src/app/models/product-model";

@Component({
    selector: 'confirm-dialog',
    templateUrl: 'confirm-dialog.html',
  })
  export class ConfirmDialog {
    public onAdd = new EventEmitter()
    constructor(
      
      public dialogRef: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: ProductModel
    ) {
      this.onAdd = new EventEmitter()
    }
  
   
  
    saveProduct(){
      
      this.onAdd.emit();
    }
  }