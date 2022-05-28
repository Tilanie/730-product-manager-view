import { Component, EventEmitter, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DataServiceService } from "../../../services/data-service.service";
import { ProductModel } from "../../../models/product-model";
import { Guid } from "guid-typescript";

@Component({
    selector: 'product-dialog',
    templateUrl: 'product-dialog.html',
  })
  
  export class DialogElementsExampleDialog {
    productModel: ProductModel;
    public onAdd = new EventEmitter();
    edit: boolean = false;
    productId: Guid;
    constructor(@Inject(MAT_DIALOG_DATA) public data: ProductModel, public dataService: DataServiceService){
      this.productModel = data;
      this.onAdd = new EventEmitter();
      this.productId = data.productID;
    }
  
    toggleEdit(){
      this.edit = !this.edit;
    }
  
    async saveProduct(){
      //@TODO
      this.dataService.updateProduct(this.productModel).subscribe((data: any) => {
        
          if(data == true){
            this.onAdd.emit();
          } else {
            // @TODO implement a failure
          }
      })
    }
  }