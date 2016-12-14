import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import {CoursesComponent} from './courses';
import {CoursesDetailComponent} from './courses/detail'
//import { AboutComponent } from './about';
//import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'courses/:id', component:CoursesDetailComponent},
  {path: 'courses/new', component:CoursesDetailComponent},
  // { path: '',      component: HomeComponent },
  // { path: 'home',  component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // {
  //   path: 'detail', loadChildren: () => System.import('./+detail')
  //     .then((comp: any) => comp.default),
  // },
  // { path: '**',    component: NoContentComponent },
];
