export class ProductModel {
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

    position: number,
    created: string,
    productId: string,
    vendorId: string,
    size: number,
    unitPrice: number,
    productName: string,
    colour: string,
    category: string,
    brand: string,
    description: string,
    stockLevel: number,
  ){
    this.position = position;
    this.created = created;
    this.productId = productId;
    this.vendorId = vendorId;
    this.size = size;
    this.unitPrice = unitPrice;
    this.productName = productName;
    this.colour = colour;
    this.category = category;
    this.brand = brand;
    this.description = description;
    this.stockLevel = stockLevel;
  }
}
