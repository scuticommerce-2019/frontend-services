export class CartModel {

  public id: string;
  public customerId: string;
  public items: Item[];


}
export class Item {
  public id: string;
  public sku: string;
  public color: string;
  public size: string;
  public quantity: number;
  public unitPrice: number;
}
