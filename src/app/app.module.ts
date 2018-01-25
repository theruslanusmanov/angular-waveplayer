import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports of MDC Angular components
import {
  MdcButtonModule,
  MdcFabModule,
} from '@angular-mdc/web';
import { MdcToolbarModule, MdcIconModule } from '@angular-mdc/web';
import { MdcElevationModule, MdcDrawerModule, MdcListModule, MdcCardModule } from '@angular-mdc/web';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdcButtonModule,
    MdcFabModule,
    MdcToolbarModule,
    MdcIconModule,
    MdcElevationModule,
    MdcDrawerModule,
    MdcListModule,
    MdcCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
