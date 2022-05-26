import { Component, EventEmitter, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { UserModel } from "../../../models/user-model";

@Component({
    selector: 'user-dialog',
    templateUrl: 'user-dialog.html',
  })
  export class UserDialog {
    public onAdd = new EventEmitter()
    constructor(
        @Inject(MAT_DIALOG_DATA) public USER_DATA: UserModel[],
      public dialogRef: MatDialog
    ) {
      this.onAdd = new EventEmitter()
    }
  
    userDataSource = new MatTableDataSource(this.USER_DATA);
    userDisplayColumns: string[] = ['id', 'id_number', 'email', 'username', 'first_name', 'last_name', 'password']
    addTask(){
      //@TODO implement
      // this.onAdd.emit();
    }
    applyUserFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.userDataSource.filter = filterValue.trim().toLowerCase();
    }
  
    rowSelected(element: UserModel){
      //@TODO assign this user to the queue
     
    }
  
  }