import { ProductModel } from "./product-model";

export class OrderModel {
    position: string;
     created: string;
     product: ProductModel;
     vendorId: string;
     amount: number;
     unitPrice: number;
     shippingStatus: string;
   constructor(
     position?: string,
     created?: string,
     product?: ProductModel,
     vendorId?: string,
     amount?: number,
     unitPrice?: number,
     shippingStatus?: string,
  
   ){
     this.position = position ? position: "";
     this.created = created ? created : "";
     this.product = product ? product : new ProductModel();
     this.vendorId = vendorId ? vendorId: "";
     this.amount = amount ? amount : 0;
     this.unitPrice = unitPrice ? unitPrice : 0;
     this.shippingStatus = shippingStatus ? shippingStatus : "";
   }
 }
 