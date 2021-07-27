import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-v2';

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Zachary Laguna',
        // icon: 'pi pi-fw pi-home',
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
      // {
      //   label: 'File',
      //   items: [{
      //     label: 'New', 
      //     icon: 'pi pi-fw pi-plus',
      //     items: [
      //       {label: 'Project'},
      //       {label: 'Other'},
      //       ]
      //     },
      //     {label: 'Open'},
      //     {label: 'Quit'}
      //   ]
      // },
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      //     {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      //   ]
      // }
    ];
  }
}
