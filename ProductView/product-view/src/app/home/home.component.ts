import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { ProductModel } from '../models/product-model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QueueModel } from '../models/queue-model';
import { TaskModel } from '../models/task-model';
import { UserModel } from '../models/user-model';




const ELEMENT_DATA: ProductModel[] = [
  {position: 1, created: "01/01/2020", productId: "1", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 21},
  {position: 2, created: "01/01/2020", productId: "2", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 343},
  {position: 3, created: "01/01/2020", productId: "3", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 12},
  {position: 4, created: "01/01/2020", productId: "4", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 55},
  {position: 5, created: "01/01/2020", productId: "5", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 1},
  {position: 6, created: "01/01/2020", productId: "6", vendorId: 'H', size: 1, unitPrice: 12.0, productName: "Name", colour: "Yellow", category: "Food", brand: "Chair", description: "cha", stockLevel: 21},
];
const tasks = [new TaskModel(0, "1234", "01/01/2020", "AMANAGER", "unassigned", "AUSER", "move", ["1", "2"]), 
              new TaskModel(1, "1234", "01/01/2020", "AMANAGER", "assigned", "AUSER", "consolidate", ["3", "4", "5"]), 
              new TaskModel(2, "1234", "01/01/2020", "AMANAGER", "unassigned", "AUSER", "move", ["3", "4", "5", "1"])]
const users = [
  new UserModel(0, "123456", "user1@gmail.com", "AUSER", ["manager"], "First", "Last", "pass123"),
  new UserModel(1, "123457", "user2@gmail.com", "BUSER", ["manager"], "First A", "Last", "pass123"),
  new UserModel(2, "123458", "user3@gmail.com", "CUSER", ["manager"], "First B", "Last", "pass123"),
  new UserModel(3, "123459", "user4@gmail.com", "DUSER", ["manager"], "First C", "Last", "pass123")
]
const QUEUE_DATA: QueueModel[] = [
 {id:0, tasks:tasks, users:users, state:"open"},
 {id:1, tasks:tasks, users:users, state:"closed"},
 {id:2, tasks:tasks, users:users, state:"open"},
 {id:3, tasks:tasks, users:users, state:"close"}
];

const TASK_DATA: TaskModel[] = tasks

const USER_DATA: UserModel[] = users

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'created', 'productId', 'vendorId', 'size', 'unitPrice', 'productName', 'colour', 'category', 'brand', 'description', 'stockLevel'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  productModel: ProductModel =  new ProductModel(1, "01/01/2020", "1", "H", 1, 12.0, "Name", "Yellow", "Food", "Chair", "cha", 21);
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
    this.productModel = new ProductModel(row.position, row.created, row.productId, row.vendorId, row.size, row.unitPrice, row.productName, row.colour, row.category, row.brand, row.description, row.stockLevel)
    this.openDialog(this.productModel)
  }

  openTaskDialog(element: any): void {
  
    const dialogRef = this.taskDialog.open(TaskDialog, {
      width: '1000px'
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      
    });
  
  }

  openUserDialog(element: any): void {
    const dialogRef = this.userDialog.open(UserDialog, {
      width: '1000px'
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      
    });
  }

  openqueueDialog(element: any): void {
    const dialogRef = this.queueDialog.open(QueueDialog, {
      width: '1000px'
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      
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


  
  constructor(public dialog: MatDialog, public productDialog: MatDialog, public taskDialog: MatDialog, public userDialog: MatDialog, public queueDialog: MatDialog) {}
  ngOnInit(): void {
  }
}

@Component({
  selector: 'product-dialog',
  templateUrl: './dialogs/product-dialog/product-dialog.html',
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

@Component({
  selector: 'create-product-dialog',
  templateUrl: './dialogs/create-product-dialog/create-product-dialog.html',
})

export class StoreProductDialog {
  productModel: ProductModel;
  public onAdd = new EventEmitter()
  constructor(public confirmDialog: MatDialog){
    this.productModel =new ProductModel()
  }

  saveProduct(){
    //@TODO
    this.openConfirmDialog(this.productModel)
  }

  openConfirmDialog(product: ProductModel): void {
    const dialogRef = this.confirmDialog.open(ConfirmDialog, {
      width: '250px',
      data: product,
    }
    );
    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      this.onAdd.emit();
    });
    dialogRef.afterClosed().subscribe(() => {
      // unsubscribe onAdd
      this.onAdd.emit();
    });
  }

  
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: './dialogs/confirm-dialog/confirm-dialog.html',
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
    //@TODO implement
    this.onAdd.emit();
  }
}


@Component({
  selector: 'task-dialog',
  templateUrl: './dialogs/task-dialog/task-dialog.html',
})
export class TaskDialog {
  public onAdd = new EventEmitter()
  constructor(
    
    public dialogRef: MatDialog
  ) {
    this.onAdd = new EventEmitter()
  }

  addTask(){
    //@TODO implement
    // this.onAdd.emit();
  }

  taskDataSource = new MatTableDataSource(TASK_DATA);
  taskDisplayColumns: string[] = ['id', 'warehouse_number', 'created_on', 'created_by', 'status', 'assigned_to', 'type']

  applyTaskFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.taskDataSource.filter = filterValue.trim().toLowerCase();
  }

  rowSelected(element: TaskModel){
    //@TODO assign this task to the queue
  }
}


@Component({
  selector: 'user-dialog',
  templateUrl: './dialogs/user-dialog/user-dialog.html',
})
export class UserDialog {
  public onAdd = new EventEmitter()
  constructor(
    
    public dialogRef: MatDialog
  ) {
    this.onAdd = new EventEmitter()
  }

  userDataSource = new MatTableDataSource(USER_DATA);
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


@Component({
  selector: 'queue-dialog',
  templateUrl: './dialogs/queue-dialog/queue-dialog.html',
})
export class QueueDialog {
  public onAdd = new EventEmitter()
  constructor(
    
    public dialogRef: MatDialog
  ) {
    this.onAdd = new EventEmitter()
  }

  queueDisplayedColumens: string[] = ['id', 'tasks', 'assigned_users', 'state'];
  queueDataSource = new MatTableDataSource(QUEUE_DATA);

  applyQueueFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.queueDataSource.filter = filterValue.trim().toLowerCase();
  }

}