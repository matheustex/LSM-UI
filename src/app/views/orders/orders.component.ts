import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any = [];
  displayedColumns: string[] = ['ID', 'Name', 'Total', 'Status'];

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    console.log('here');
    this.orders = [
      {
        ID: 1,
        name: 'teste',
        Total: 'teste',
        Status: 'New'
      },
      {
        ID: 1,
        name: 'teste',
        Total: 'teste',
        Status: 'New'
      }
    ]; // this.ordersService.listOrders().subscribe(x => x);
  }

}
