import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any = [];
  displayedColumns: string[] = ['Name', 'Day', 'Total', 'Status'];

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    console.log('here');

    this.ordersService.listOrders().subscribe(x => this.orders = x);
  }

}
