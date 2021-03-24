import { DepartmentsService } from './../../../services/departments.service';
import { Department } from './../../../shared/models/department';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  orders: any = [];
  displayedColumns: string[] = ['Id', 'Name'];
  dataSource = new MatTableDataSource<Department>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private ordersService: DepartmentsService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.ordersService.findAll().subscribe(x => {
        this.orders = x;
        this.dataSource = new MatTableDataSource(this.orders.data);
      });
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
  }

}
