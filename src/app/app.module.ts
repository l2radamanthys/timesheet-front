import { BlockTemplateComponent } from './block-template.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { BlockUIModule } from 'ng-block-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    BlockTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    BlockUIModule.forRoot({ template: BlockTemplateComponent }),
    PagesModule,
  ],
  providers: [],
  entryComponents: [ BlockTemplateComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
