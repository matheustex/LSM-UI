import { MatTableDataSource } from '@angular/material/table';
import { Order } from './../../shared/models/order';
import { OrdersService } from './../../services/orders.service';
import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, AfterViewInit {
  orders: any = [];
  displayedColumns: string[] = ['Name', 'Day', 'Total', 'Status'];
  dataSource = new MatTableDataSource<Order>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private ordersService: OrdersService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    console.log('here');

    this.ordersService.listOrders().subscribe(x => {
        this.orders = x;
        this.dataSource.data = this.orders;
      });
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
  }

}
