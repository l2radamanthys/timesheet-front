import { FormSemanaComponent } from './form-semana/form-semana.component';
import { ModalComponent } from './modal/modal.component';
import { MyCustomMaterialModuleModule } from '../my-custom-material-module/my-custom-material-module.module';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyCustomMaterialModuleModule,
    PipesModule,
  ],
  declarations: [
    FormSemanaComponent,
    ModalComponent,
  ],
  exports: [
    FormSemanaComponent,
    ModalComponent,
  ]
})
export class ComponentsModule { }
