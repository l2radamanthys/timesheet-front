import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { environment } from './../../environments/environment';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

export const PagesRoutesModule = RouterModule.forRoot(
  routes, {
    enableTracing: environment.ENABLE_TRACING,
    useHash: environment.USE_HASH
});


