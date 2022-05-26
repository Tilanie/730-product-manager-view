import { Component, EventEmitter, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { QueueModel } from "src/app/models/queue-model";
import { TaskModel } from "src/app/models/task-model";
import { ConfirmAssignmentDialog } from "../confirm-assignment-dialog/confirm-assignment-dialog";

@Component({
    selector: 'queue-dialog',
    templateUrl: 'queue-dialog.html',
  })
  export class QueueDialog {
    public onAdd = new EventEmitter();
    private queue_info = new QueueModel();
    private info;
    private QUEUE_DATA = new Array<QueueModel>();
    constructor(
      
      public dialogRef: MatDialog,
      public confirmDialog: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      console.log(data)
      this.onAdd = new EventEmitter();
      this.info = data.info;
      this.QUEUE_DATA = data.QUEUE_DATA;
      this.queueDataSource = new MatTableDataSource(this.QUEUE_DATA);
    }
  
    queueDisplayedColumens: string[] = ['id', 'tasks', 'assigned_users', 'state'];
    queueDataSource = new MatTableDataSource(this.QUEUE_DATA);
  
    applyQueueFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.queueDataSource = new MatTableDataSource(this.QUEUE_DATA);
  
      this.queueDataSource.filter = filterValue.trim().toLowerCase();
    }

    assignQueue(queue: QueueModel, task: TaskModel){
      //@TODO implement
      this.onAdd.emit();
    }

    rowSelected(element: QueueModel){
      //@TODO assign this user to the queue
      this.queue_info = element;
      const dialogRef = this.confirmDialog.open(ConfirmAssignmentDialog, {
        width: '1000px',
        data: element
      });
  
      const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
  
        this.assignQueue(this.queue_info, this.info);
      })
    }
  
  }