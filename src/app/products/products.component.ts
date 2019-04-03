import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {UploadFileService} from './upload-file.service';
import {ProductsServices} from './productlist/products.services';
import {ProductsModel} from './productlist/products.model';
import {NgForm} from '@angular/forms';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  selectedFiles: FileList;
  filename: string;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  product: ProductsModel;

  constructor(private uploadService: UploadFileService, private productService: ProductsServices, private router: Router) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles[0].name);
    // this.product.image = this.selectedFiles[0].name;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.filename =  this.selectedFiles[0].name;
      }
    });
    this.selectedFiles = undefined;
  }

  createProduct(form: NgForm) {
    console.log('Form ' + form.value);
    console.log(' Json ' + JSON.stringify(form.value));

    this.product = JSON.parse(JSON.stringify(form.value));

    console.log('Categories ' + this.product.categories);

    const categoryArray = this.product.categories.toString().split(',');
    this.product.categories = categoryArray;

    console.log('Categories After ' + this.product.categories);


    this.productService.createProduct(this.product).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/admin/productlist']);
      },
      (error) => console.log(error)
    );
  }


}
