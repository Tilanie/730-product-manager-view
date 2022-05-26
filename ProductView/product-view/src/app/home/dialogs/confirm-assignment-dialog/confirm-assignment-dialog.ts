import { Component, EventEmitter, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProductModel } from "src/app/models/product-model";

@Component({
    selector: 'confirm-assignment-dialog',
    templateUrl: 'confirm-assignment-dialog.html',
  })
  export class ConfirmAssignmentDialog {
    public onAdd = new EventEmitter()
    constructor(
      
      public dialogRef: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.onAdd = new EventEmitter()
    }
  
   
  
    assignTask(){
    
      this.onAdd.emit();
    }
  }