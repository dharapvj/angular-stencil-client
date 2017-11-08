import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
    <button (click)="loadLazy()">Load Lazy</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router){}
  public loadLazy() {
    this.router.navigate(['lazy']);
  }
}
