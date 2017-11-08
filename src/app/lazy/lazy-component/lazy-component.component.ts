import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-component',
  template: `
    <p>
      lazy-component Works!
      </p>
      <button-dropdown title="stencil">
        <ul>
        <li>The content in the slot!</li>
        <li>The content in the slot!</li>
        <li>The content in the slot!</li>
        <li>The content in the slot!</li>
        </ul>
      </button-dropdown>
  `,
  styles: []
})
export class LazyLoadedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
