import { OrdersNewComponent } from './views/orders/orders-new/orders-new.component';
import { ItemsComponent } from './views/items/items.component';
import { OrdersComponent } from './views/orders/orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/new', component: OrdersNewComponent },
  { path: 'orders/:id/items', component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
