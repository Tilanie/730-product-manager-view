export class TaskModel {
   
     id: number;
     warehouseNumber: string;
     createdOn :string;
     createdBy: string;
    status: string;
    assignedTo: string;
    type: string;
    products: string[];
 
   constructor(
 
    id?: number,
    warehouseNumber?: string,
    createdOn?: string,
    createdBy?: string,
    status?: string,
    assignedTo?: string,
    type?: string,
    products?: string[]
   ){
     this.id = id ? id: 0;
     this.warehouseNumber = warehouseNumber ? warehouseNumber : "";
     this.createdOn = createdOn ? createdOn : "";
     this.createdBy = createdBy ? createdBy: "";
     this.assignedTo = assignedTo ? assignedTo : "";
     this.status = status ? status : "";
     this.type = type ? type : "";
     this.products = products ? products : [];
   }
 }
 