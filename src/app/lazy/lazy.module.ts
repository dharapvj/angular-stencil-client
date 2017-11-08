import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LazyLoadedComponent } from './lazy-component/lazy-component.component';

import 'button-dropdown-stencil-test';

const routes: Routes = [
	{ path: '', component: LazyLoadedComponent }
];


@NgModule({
  declarations: [
    LazyLoadedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LazyModule { }
