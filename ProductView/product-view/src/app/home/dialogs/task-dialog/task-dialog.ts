import { Component, EventEmitter, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { TaskModel } from "../../../models/task-model";

@Component({
    selector: 'task-dialog',
    templateUrl: 'task-dialog.html',
  })
  export class TaskDialog {
    public onAdd = new EventEmitter()
    constructor(
        @Inject(MAT_DIALOG_DATA) public TASK_DATA: TaskModel[],
      public dialogRef: MatDialog
    ) {
      this.onAdd = new EventEmitter()
    }
  
    addTask(){
      //@TODO implement
      // this.onAdd.emit();
    }
  
    taskDataSource = new MatTableDataSource(this.TASK_DATA);
    taskDisplayColumns: string[] = ['id', 'warehouse_number', 'created_on', 'created_by', 'status', 'assigned_to', 'type']
  
    applyTaskFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.taskDataSource.filter = filterValue.trim().toLowerCase();
    }
  
    rowSelected(element: TaskModel){
      //@TODO assign this task to the queue
    }
  }