export class TaskModel {
   
     id: number;
     warehouse_number: string;
     created_on :string;
     created_by: string;
    status: string;
    assigned_to: string;
    type: string;
    products: string[];
 
   constructor(
 
    id?: number,
    warehouse_number?: string,
    created_on?: string,
    created_by?: string,
    status?: string,
    assigned_to?: string,
    type?: string,
    products?: string[]
   ){
     this.id = id ? id: 0;
     this.warehouse_number = warehouse_number ? warehouse_number : "";
     this.created_on = created_on ? created_on : "";
     this.created_by = created_by ? created_by: "";
     this.assigned_to = assigned_to ? assigned_to : "";
     this.status = status ? status : "";
     this.type = type ? type : "";
     this.products = products ? products : [];
   }
 }
 