import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PlayCentreModule } from './play-centre/play-centre.module';
import { PlayCentrePromo } from './play-centre/components/play-centre-promo/play-centre-promo';


@NgModule({
  declarations: [
    AppComponent,
    PlayCentrePromo
  ],
  imports: [
    BrowserModule,
    PlayCentreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
