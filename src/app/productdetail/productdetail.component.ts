import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {ProductsModel} from '../products/productlist/products.model';
import {ProductsServices} from '../products/productlist/products.services';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit, OnDestroy  {

  productCode: string;
  paramSubscription: Subscription;
  product: ProductsModel;

    constructor(private route: ActivatedRoute, private productService: ProductsServices) {

    }
    ngOnInit() {
      this.productCode = this.route.snapshot.params.code;
      this.getProductDetail();

      /**
       * this is called when route param changed
       */
      this.paramSubscription = this.route.params.subscribe(
        (params: Params) => {
          this.productCode = params.code;
          this.getProductDetail();
        }
      );
    }
    getProductDetail() {
      this.productService.getProductDetail(this.productCode).subscribe(

        (response) => {
          this.product = JSON.parse(JSON.stringify(response));
        },
        (error) => {
          console.log('Error getting product detail ');
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
