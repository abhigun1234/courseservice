import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    productDetails
  constructor(private prod:ProductService) { }

  ngOnInit() {
    this.prod.getProductDetails().subscribe(res=>{
      console.log("res",res)
      this.productDetails=res.result;
    })
  }

}
