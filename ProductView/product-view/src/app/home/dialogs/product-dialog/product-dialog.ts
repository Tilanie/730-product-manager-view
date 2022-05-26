import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProductModel } from "../../../models/product-model";

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
      //@TODO
    }
  }