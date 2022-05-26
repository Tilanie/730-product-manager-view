import { Component, EventEmitter, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { QueueModel } from "src/app/models/queue-model";

@Component({
    selector: 'queue-dialog',
    templateUrl: 'queue-dialog.html',
  })
  export class QueueDialog {
    public onAdd = new EventEmitter()
    constructor(
      
      public dialogRef: MatDialog,
      @Inject(MAT_DIALOG_DATA) public QUEUE_DATA: QueueModel[]
    ) {
      this.onAdd = new EventEmitter()
    }
  
    queueDisplayedColumens: string[] = ['id', 'tasks', 'assigned_users', 'state'];
    queueDataSource = new MatTableDataSource(this.QUEUE_DATA);
  
    applyQueueFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.queueDataSource.filter = filterValue.trim().toLowerCase();
    }
  
  }