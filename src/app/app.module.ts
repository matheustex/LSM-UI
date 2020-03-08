import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/vendor/material-vendor.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './views/orders/orders.component';
import { ItemsComponent } from './views/items/items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersNewComponent } from './views/orders/orders-new/orders-new.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    ItemsComponent,
    OrdersNewComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
