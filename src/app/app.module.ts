import { NgModule, ErrorHandler } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// custom imports
import { MyApp } from './app.component';
import { APP_ROUTES_PROVIDER } from "./app.router";
import { Page1Component } from '../pages/page1/page1.component';
import { Page2Component } from '../pages/page2/page2.component';
import { Page3Component } from '../pages/page3/page3.component';


@NgModule({
  declarations: [
    MyApp,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    APP_ROUTES_PROVIDER,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/m" },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
