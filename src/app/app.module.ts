import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { LoginModule } from './login/login.module';
import { CommonModule, DatePipe } from '@angular/common';
import * as Hammer from 'hammerjs';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

export class MyHammerConfig extends HammerGestureConfig {
  overrides =  {
    swipe: { direction: Hammer.DIRECTION_ALL },
  } as any;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HammerModule,
    LandingModule,
    LoginModule,
    MainRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
