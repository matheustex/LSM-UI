import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  constructor(private http: HttpClient) { }

  listOrders() {
    return this.http.get(environment.ordersApi);
  }
}
