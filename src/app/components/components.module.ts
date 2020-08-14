import { FormSemanaComponent } from './form-semana/form-semana.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormSemanaComponent,
  ],
  exports: [
    FormSemanaComponent,
  ]
})
export class ComponentsModule { }
