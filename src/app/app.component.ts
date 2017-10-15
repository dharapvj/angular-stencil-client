import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
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
export class AppComponent {
  title = 'app';
}
