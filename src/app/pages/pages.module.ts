import { HomeComponent } from './home/home.component';
import { PagesRoutesModule } from './pages.routing';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { ServicesModule } from '../services/services.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutesModule,
    ComponentsModule,
    ServicesModule,
    PipesModule,
  ],
  declarations: [
    HomeComponent
  ],
})
export class PagesModule { }
