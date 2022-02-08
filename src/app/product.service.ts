import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProductDetails(){

    return this.http.get("https://ecomerce-back-end.herokuapp.com/api/addproduct")
  }
}
