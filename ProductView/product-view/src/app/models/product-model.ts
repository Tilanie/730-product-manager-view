import { Guid } from "guid-typescript";

export class ProductModel {
   id: string;
    created: string;
    productID: string;
    vendorID: string;
    size: number;
    unitPrice: number;
    productName: string;
    colour: string;
    category: string;
    brand: string;
    description: string;
    stockLevel: number;

  constructor(
    id? : string,
    created?: string,
    productID?: string,
    vendorID?: string,
    size?: number,
    unitPrice?: number,
    productName?: string,
    colour?: string,
    category?: string,
    brand?: string,
    description?: string,
    stockLevel?: number,
  ){
    this.created = created ? created : "";
    this.productID = productID ? productID : Guid.create().toString();
    this.vendorID = vendorID ? vendorID: Guid.create().toString();
    this.size = size ? size : 0;
    this.unitPrice = unitPrice ? unitPrice : 0;
    this.productName = productName ? productName : "";
    this.colour = colour ? colour : "";
    this.category = category ? category: "";
    this.brand = brand ? brand : "";
    this.description = description ? description : "";
    this.stockLevel = stockLevel ? stockLevel : 0;
    this.id = id ? id : Guid.create().toString()
  }
}
