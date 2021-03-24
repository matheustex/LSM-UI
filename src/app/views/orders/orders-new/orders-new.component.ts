import { OrdersService } from './../../../services/orders.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Order } from 'src/app/shared/models/order';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-orders-new',
  templateUrl: './orders-new.component.html',
  styleUrls: ['./orders-new.component.scss']
})
export class OrdersNewComponent implements OnInit {
  orderForm = new FormGroup({
    date: new FormControl(new Date(), [Validators.required]),
    name: new FormControl('', [Validators.required]),
    note: new FormControl('')
  });

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.orderForm.valid) {

      const { name, date, note } = this.orderForm.value;

      const order = new Order();

      order.related = date;
      order.name = name;
      order.note = note;

      return this.ordersService.save(order)
        .pipe(
          tap(() =>
            this.snackBar.open('Planilha iniciada com sucesso')
          )
        ).subscribe((res: Order) =>
          this.router.navigate([`orders/${res.id}/items`])
        );

    }
  }
}
