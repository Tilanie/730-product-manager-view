import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { QueueModel } from '../models/queue-model';
import { TaskModel } from '../models/task-model';
import { UserModel } from '../models/user-model';

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

  public addProduct(product: ProductModel): any{
    let body = JSON.parse(JSON.stringify(product));
    let productId = (product.productID).toString();
    let vendorId =  product.vendorID.toString();
    
    body.productId = productId;
    body.id = body.productId;
    body.vendorId = vendorId;
    body.created = new Date()

    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post<ProductModel>('https://cos730-product-manager.azurewebsites.net/Product/Add', body, options);
  }

  public updateProduct(product: ProductModel): any{
    let body = JSON.parse(JSON.stringify(product));
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post<ProductModel>('https://cos730-product-manager.azurewebsites.net/Product/Update/' + product.id, body, options);
  }

  public assignTaskToQueue(task: TaskModel, queue: QueueModel): any{
    return this.http.get<any>('https://cos730-product-manager.azurewebsites.net/Task/Enqueue/' + queue.id + '/' + task.id);
  }

  public assignUserToQueue(user: UserModel, queue: QueueModel): any{
    return this.http.get<any>('https://cos730-product-manager.azurewebsites.net/User/Enqueue/' + queue.id + '/' + user.id);
  }
}
