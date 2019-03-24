import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {CartModel} from './cart.model';
import {CartServices} from './cart.services';
import {ProductsServices} from '../products/productlist/products.services';
import {ProductsModel} from '../products/productlist/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy  {

  customerId: string;
  paramSubscription: Subscription;
  cart: CartModel;
  products: ProductsModel[] = [];

  constructor(private route: ActivatedRoute, private cartService: CartServices, private productService: ProductsServices) {

  }
  ngOnInit() {
    this.customerId = this.route.snapshot.params.code;
    this.getCart();

    /**
     * this is called when route param changed
     */
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.customerId = params.code;
        this.getCart();
      }
    );
  }
  getCart() {
    this.cartService.getCart(this.customerId).subscribe(

      (response) => {
        this.cart = JSON.parse(JSON.stringify(response));
        this.getProductDetails();
      },
      (error) => {
        console.log('Error getting cart ');
      }
    );
  }
  getProductDetails() {

    const skuList = '687365946527,190172088897';
    this.productService.getProductsBySkuList(skuList).subscribe(

      (response) => {
        this.products = JSON.parse(JSON.stringify(response));
      },
      (error) => {
        console.log('Error getting product ');
      }
    );
  }
  /**
   * Angular do it by itself but to clean unsubscribe is good option.
   */
  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}
