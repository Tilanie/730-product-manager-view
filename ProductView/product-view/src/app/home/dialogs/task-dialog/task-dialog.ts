import { Component, EventEmitter, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { NgxSpinnerService } from "ngx-spinner";
import { QueueModel } from "src/app/models/queue-model";
import { DataServiceService } from "src/app/services/data-service.service";
import { TaskModel } from "../../../models/task-model";
import { ConfirmAssignmentDialog } from "../confirm-assignment-dialog/confirm-assignment-dialog";

@Component({
    selector: 'task-dialog',
    templateUrl: 'task-dialog.html',
  })
  export class TaskDialog {
    public onAdd = new EventEmitter();
    public queue_info;
    public task_info = new TaskModel();
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialog,
      public confirmDialog: MatDialog,
      private dataService: DataServiceService,
      private spinner: NgxSpinnerService
    ) {
      this.onAdd = new EventEmitter()
      this.queue_info = data.QUEUE_DATA;
     
    }
  

    taskDataSource = new MatTableDataSource(this.data.TASK_DATA);
    taskDisplayColumns: string[] = ['id', 'warehouse_number', 'created_on', 'created_by', 'status', 'assigned_to', 'type']
  
    applyTaskFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.taskDataSource.filter = filterValue.trim().toLowerCase();
    }

    assignTaskToQueue(task: TaskModel, queue: QueueModel){
      this.spinner.show();
      this.dataService.assignTaskToQueue(task, queue).subscribe((data: any) => {
        this.onAdd.emit();
        this.spinner.hide();
      });
      
    }
  
    rowSelected(element: TaskModel){
      //@TODO assign this task to the queue
      this.task_info = element;
      const dialogRef = this.confirmDialog.open(ConfirmAssignmentDialog, {
        width: '1000px',
        data: element
      });
  
      const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
  
        this.assignTaskToQueue(this.task_info, this.queue_info);
      });
    }
  }