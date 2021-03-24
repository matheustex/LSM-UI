import { Order } from 'src/app/shared/models/order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})

export class OrdersService extends GenericService<Order, string> {

  constructor(protected http: HttpClient) {
    super(http, environment.ordersApi);
  }

}
