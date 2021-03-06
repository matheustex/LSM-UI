import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MaterialModule } from './vendor/material-vendor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalComponent } from './components/modal/modal.component';

// tslint:disable-next-line: one-variable-per-declaration
const components: any[] = [
  NavigationBarComponent,
  NavComponent
];

@NgModule({
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [...components, ModalComponent],
  exports: [...components]
})

export class SharedModule { }

