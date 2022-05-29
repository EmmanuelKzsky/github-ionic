import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {InAppBrowser} from '@awesome-cordova-plugins/in-app-browser/ngx';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {fromRoot} from "./store/indexUsers";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({userState: fromRoot.UsersReducer}),
    EffectsModule.forRoot([fromRoot.UsersEffects])
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    InAppBrowser
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
