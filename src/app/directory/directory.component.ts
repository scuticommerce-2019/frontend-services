import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {ProductsServices} from '../products/productlist/products.services';
import {ProductsModel} from '../products/productlist/products.model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit, OnDestroy {

  categoryCode: string;
  paramSubscription: Subscription
  products: ProductsModel[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductsServices) {

  }

  ngOnInit() {

    this.categoryCode =  this.route.snapshot.params.code;
    this.getProducts();

    /**
     * this is called when route param changed
     */
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.categoryCode = params.code;
        this.getProducts();
      }
    );

  }
  getProducts() {
    this.productService.getProductsInCategory(this.categoryCode).subscribe(

      (response) => {
        console.log('products ');
        this.products = JSON.parse(JSON.stringify(response));
      },
      (error) => {
        console.log('Error getting products ');
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
