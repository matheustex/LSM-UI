import { Order } from 'src/app/shared/models/order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  constructor(private http: HttpClient) { }

  createOrder(body: Order) {
    return this.http.post(environment.ordersApi, JSON.stringify(body), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  listOrders() {
    return this.http.get(environment.ordersApi, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  getOrder(id: string): Observable<any> {
    return this.http.get(environment.ordersApi + `/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }
}
