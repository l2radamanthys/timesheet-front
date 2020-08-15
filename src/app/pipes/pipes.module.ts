import { DateFormatPipe } from './date-format.pipe';
import { LogPipe } from './log.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LogPipe,
    DateFormatPipe,
  ],
  exports: [
    LogPipe,
    DateFormatPipe,
  ]
})
export class PipesModule { }
