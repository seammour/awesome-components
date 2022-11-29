import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';

const routes : Routes = [{path: '', component: ComplexFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplexFormRoutingModule { }
