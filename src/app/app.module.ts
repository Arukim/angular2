import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import {LoginComponent} from './login';
import {CoursesComponent} from './courses';
import {CoursesDetailComponent} from './courses/detail';
import {DateComponent} from './common/date.component';
import {DurationComponent} from './common/duration.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { DurationPipe } from './pipes/duration.pipe';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    LoginComponent,
    CoursesComponent,
    CoursesDetailComponent,
    DateComponent,
    DurationComponent,
    DurationPipe
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}

}
