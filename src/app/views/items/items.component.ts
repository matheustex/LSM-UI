import { ModalComponent } from './../../shared/components/modal/modal.component';
import { OrdersService } from './../../services/orders.service';
import { Item } from './../../shared/models/item';
import { Order } from 'src/app/shared/models/order';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  order: Order = new Order();
  items: Item[] = [];

  displayedColumns = ['Type', 'Sector', 'Dep', 'Quantity', 'Value'];
  isLoading = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private itemsService: ItemsService
  ) {
    this.route.queryParams.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.order.id = this.route.snapshot.params.id;
    });
  }

  ngOnInit(): void {
    this.getOrder();

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  openItemModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '200px';
    dialogConfig.width = '700px';

    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

  getOrder() {
    this.ordersService.getOrder(this.order.id)
      .subscribe((res: Order) => {
        this.order = res;
        this.isLoading = false;
      },
        error => this.isLoading = false
      );
  }

  getOrderItems() {
    this.itemsService.listItemsByOrderId()
      .subscribe((res: Item[]) => {
        this.items = res;
        this.isLoading = false;
      },
        error => this.isLoading = false
      );
  }

}
