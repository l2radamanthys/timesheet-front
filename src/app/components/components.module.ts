import { CommonModule } from '@angular/common';
import { FormSemanaComponent } from './form-semana/form-semana.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { MyCustomMaterialModuleModule } from '../my-custom-material-module/my-custom-material-module.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';



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
    NavbarComponent,
  ],
  exports: [
    FormSemanaComponent,
    ModalComponent,
    NavbarComponent,
  ]
})
export class ComponentsModule { }
