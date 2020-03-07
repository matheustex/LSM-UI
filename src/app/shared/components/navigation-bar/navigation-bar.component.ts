import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  @Output() toggleSidenav = new EventEmitter<void>();

  private returnUrl = '/';

  constructor(
    private router: Router,
  ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });

  }

  public onProfile() {
    this.router.navigate(['users/profile']);
  }

  public logout() {

  }

}
