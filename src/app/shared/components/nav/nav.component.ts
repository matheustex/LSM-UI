import { ToolItem } from './../../models/toolItem';
import { SidenavService } from './../../../services/sidenav.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

interface SideNavRoute {
  icon?: string;
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('commandbarSidenav', { static: true })
  public sidenav: MatSidenav;
  public myWorkRoutes: SideNavRoute[];
  public customerRoutes: SideNavRoute[];

  public toolItems: ToolItem[];

  protected subscription: Subscription;

  constructor(
    private commandBarSidenavService: SidenavService
  ) { }

  public ngOnInit(): void {
    this.commandBarSidenavService.setSidenav(this.sidenav);
    this.loadNavListItems();
    this.toolItems = [
      {
        id: '1',
        name: 'Orders',
        icon: ''
      },
      {
        id: '2',
        name: 'Products',
        icon: ''
      }
    ];
  }

  async loadNavListItems() {
    this.myWorkRoutes = [
      {
        title: 'Ordem',
        route: 'orders',
        icon: 'assignment'
      },
      {
        title: 'Items',
        route: 'items',
        icon: 'label'
      },
      {
        title: 'Planilhas',
        route: 'items',
        icon: 'assignment'
      },
      {
        title: 'Configurações',
        route: 'items',
        icon: 'assignment'
      }
    ];
    this.customerRoutes = [];
  }

  public onDragStart(event, identifier) {
    event.dataTransfer.setData('widgetIdentifier', identifier);
    event.dataTransfer.setData('text/plain', 'Drag Me Button');
    event.dataTransfer.dropEffect = 'move';
  }

}
