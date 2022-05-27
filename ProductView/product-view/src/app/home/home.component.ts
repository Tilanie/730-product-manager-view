import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { ProductModel } from '../models/product-model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QueueModel } from '../models/queue-model';
import { TaskModel } from '../models/task-model';
import { UserModel } from '../models/user-model';
import { ConfirmDialog } from './dialogs/confirm-dialog/confirm-dialog';
import { QueueDialog } from './dialogs/queue-dialog/queue-dialog';
import { StoreProductDialog } from './dialogs/create-product-dialog/create-product-dialog';
import { TaskDialog } from './dialogs/task-dialog/task-dialog';
import { UserDialog } from './dialogs/user-dialog/user-dialog';
import { DialogElementsExampleDialog } from './dialogs/product-dialog/product-dialog';
import { DataServiceService } from '../services/data-service.service';
import { ArrayType } from '@angular/compiler';
import { Guid } from 'guid-typescript';




var ELEMENT_DATA: ProductModel[] = [
 ];


var QUEUE_DATA: QueueModel[] = [

];

var TASK_DATA: TaskModel[] = [

];

var USER_DATA: UserModel[] = [

];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'created', 'productId', 'vendorId', 'size', 'unitPrice', 'productName', 'colour', 'category', 'brand', 'description', 'stockLevel'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  productModel: ProductModel =  new ProductModel(Guid.create().toString(), "01/01/2020", Guid.create(), Guid.create(), 1, 12.0, "Name", "Yellow", "Food", "Chair", "cha", 21);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  queueDisplayedColumens: string[] = ['id', 'tasks', 'assigned_users', 'state', 'actions'];
  queueDataSource = new MatTableDataSource(QUEUE_DATA);
  applyQueueFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.queueDataSource.filter = filterValue.trim().toLowerCase();
  }
  

  userDisplayColumns: string[] = ['id', 'id_number', 'email', 'username', 'roles', 'first_name', 'last_name', 'password', 'actions']
  userDataSource = new MatTableDataSource(USER_DATA);
  applyUserFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userDataSource.filter = filterValue.trim().toLowerCase();
  }

  taskDisplayColumns: string[] = ['id', 'warehouse_number', 'created_on', 'created_by', 'status', 'assigned_to', 'type', 'products', 'actions']
  taskDataSource = new MatTableDataSource(TASK_DATA);
  applyTaskFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.taskDataSource.filter = filterValue.trim().toLowerCase();
  }

  rowSelected(row: ProductModel){
    this.productModel = new ProductModel(row.id, row.created, row.productID, row.vendorID, row.size, row.unitPrice, row.productName, row.colour, row.category, row.brand, row.description, row.stockLevel)
    this.openDialog(this.productModel)
  }

  openTaskDialog(element: any): void {
  
    const dialogRef = this.taskDialog.open(TaskDialog, {
      width: '1000px',
      data: {
        TASK_DATA: TASK_DATA,
        QUEUE_DATA: element
      }
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      this.dataService.getQueues().subscribe((data: QueueModel[]) => {
        
        QUEUE_DATA = data;
        this.queueDataSource = new MatTableDataSource(QUEUE_DATA);
      });
      dialogRef.close();
    });
  
  }

  openUserDialog(element: any): void {
    const dialogRef = this.userDialog.open(UserDialog, {
      width: '1000px',
      data: {
        USER_DATA: USER_DATA,
        QUEUE_DATA: element
      }
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      dialogRef.close();
    });
  }

  openqueueDialog(element: any): void {
    const dialogRef = this.queueDialog.open(QueueDialog, {
      width: '1000px',
      data: {
        QUEUE_DATA: QUEUE_DATA,
        info: element
      }
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      this.dataService.getTasks().subscribe((data: TaskModel[]) => {
        TASK_DATA = data;
        this.taskDataSource = new MatTableDataSource(TASK_DATA);
      });

      this.dataService.getQueues().subscribe((data: QueueModel[]) => {
        QUEUE_DATA = data;
        this.queueDataSource = new MatTableDataSource(QUEUE_DATA);
      });
  
      dialogRef.close();
    });
  }

  assignTaskToQueue(element: any){
    let task = element;
    this.openqueueDialog(element);
  }

  assignUserToQueue(element: any){
    let user = element;
    this.openqueueDialog(element);
  }

  assignTask(element: any){
    let queue = element;
    this.openTaskDialog(element);
  }

  assignUser(element: any){
    let queue = element;
    this.openUserDialog(element);
  }

  openDialog(productModel: ProductModel) {
    this.dialog.open(DialogElementsExampleDialog, {
      width: '30%',
      data: productModel} );
  }

  openAddProductDialog(){
    const dialogRef = this.productDialog.open(StoreProductDialog, {

      width: '30%',
      
    } );

    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      dialogRef.close()
   
    });
    dialogRef.afterClosed().subscribe(() => {
      // unsubscribe onAdd
     
    });
  }


  public product_data: ProductModel[] = new Array<ProductModel>();
  constructor(public dialog: MatDialog, public productDialog: MatDialog, public taskDialog: MatDialog, public userDialog: MatDialog, public queueDialog: MatDialog, public dataService: DataServiceService) {}
  async ngOnInit(): Promise<void> {
    this.dataService.getProducts().subscribe((data: ProductModel[]) => {
      this.product_data = data;
      ELEMENT_DATA = this.product_data;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  })

    this.dataService.getQueues().subscribe((data: QueueModel[]) => {
      QUEUE_DATA = data;
      this.queueDataSource = new MatTableDataSource(QUEUE_DATA);
    });

    this.dataService.getTasks().subscribe((data: TaskModel[]) => {
      TASK_DATA = data;
      this.taskDataSource = new MatTableDataSource(TASK_DATA);
    });

    this.dataService.getUsers().subscribe((data: UserModel[]) => {
      USER_DATA = data;
      console.log(USER_DATA)
      this.userDataSource = new MatTableDataSource(USER_DATA);
    });

    
    
    
  }
}





