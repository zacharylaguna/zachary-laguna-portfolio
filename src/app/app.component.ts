import { Component, Inject } from '@angular/core';

import { MenuItem } from 'primeng-lts/api';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-v2';

  items: MenuItem[] = [];

  constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit() {
    this.items = [
      {
        // label: 'Zachary Laguna',
        icon: 'pi pi-fw pi-home',
        url: '/home', // necessary for link changer (.active in app.component.scss)
        routerLink: '/home'
      },
      {
        label: 'About Me',
        icon: 'pi pi-fw pi-info-circle',
        url: '/aboutme',
        routerLink: 'aboutme'
      },
      {
        label: 'Academics',
        icon: 'pi pi-fw pi-book',
        url: '/academics',
        routerLink: '/academics'
      },
      {
        label: 'Experiences',
        icon: 'pi pi-fw pi-briefcase',
        url: '/experiences',
        routerLink: '/experiences'
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-star',
        url: '/projects',
        routerLink: '/projects'
      },
    ];
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }
}
