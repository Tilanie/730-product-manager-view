export class QueueModel {
    position: number;
     created: string;
     productId: string;
     vendorId: string;
     size: number;
     unitPrice: number;
     productName: string;
     colour: string;
     category: string;
     brand: string;
     description: string;
     stockLevel: number;
 
   constructor(
 
     position?: number,
     created?: string,
     productId?: string,
     vendorId?: string,
     size?: number,
     unitPrice?: number,
     productName?: string,
     colour?: string,
     category?: string,
     brand?: string,
     description?: string,
     stockLevel?: number,
   ){
     this.position = position ? position: 0;
     this.created = created ? created : "";
     this.productId = productId ? productId : "";
     this.vendorId = vendorId ? vendorId: "";
     this.size = size ? size : 0;
     this.unitPrice = unitPrice ? unitPrice : 0;
     this.productName = productName ? productName : "";
     this.colour = colour ? colour : "";
     this.category = category ? category: "";
     this.brand = brand ? brand : "";
     this.description = description ? description : "";
     this.stockLevel = stockLevel ? stockLevel : 0;
   }
 }
 