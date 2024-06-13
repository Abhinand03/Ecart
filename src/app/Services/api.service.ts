import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url: any = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  allProducts() {
    return this.http.get(`${this.base_url}/all-products`)
  }

  getProduct(id:any) {
    return this.http.get(`${this.base_url}/get-product/${id}`)
  }

  //user authentication
  userRegisterApi(data:any) {
    return this.http.post(`${this.base_url}/register`,data)
  }
  userLoginApi(data:any) {
    return this.http.post(`${this.base_url}/login`,data)
}

}