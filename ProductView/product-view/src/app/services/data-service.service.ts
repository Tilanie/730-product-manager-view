import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { QueueModel } from '../models/queue-model';
import { TaskModel } from '../models/task-model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public products: ProductModel[] = new Array<ProductModel>();
  constructor(private http: HttpClient) { }

  public getProducts(): any{
    let data =  this.http.get<any>('https://cos730-product-manager.azurewebsites.net/Product/List');
    return data;
    
  } 

  public getQueues(): any{
    let data =  this.http.get<any>('https://cos730-product-manager.azurewebsites.net/Queue/List');
    return data;
  }

  public getTasks(): any{
    let data =  this.http.get<any>('https://cos730-product-manager.azurewebsites.net/Task/List');
    return data;
  }

  public getUsers(): any{
    let data =  this.http.get<any>('https://cos730-product-manager.azurewebsites.net/User/List');
    return data;
  }

  public addProduct(product: ProductModel){
    let body = JSON.parse(JSON.stringify(product));
    body.productId = product.productID.toString();
    body.id = body.productId;
    body.vendorId = product.vendorID.toString();
    body.created = "2022-05-27T17:46:44.448Z";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };
    this.http.post<ProductModel>('https://cos730-product-manager.azurewebsites.net/Product/Add', body, options).subscribe(data => {
        console.log(data)
    })
  }

  public updateProduct(product: ProductModel){
    let body = JSON.parse(JSON.stringify(product));
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };
    this.http.patch<ProductModel>('https://cos730-product-manager.azurewebsites.net/Product/Update/' + product.id, body, options).subscribe(data => {
        console.log(data)
    })
  }

  public assignTaskToQueue(task: TaskModel, queue: QueueModel): any{
    return this.http.get<any>('https://cos730-product-manager.azurewebsites.net/Task/Enqueue/' + queue.id + '/' + task.id);
  }
}
