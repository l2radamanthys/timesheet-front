import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlockTemplateComponent } from './block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
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
    ComponentsModule,
  ],
  providers: [],
  entryComponents: [ BlockTemplateComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
