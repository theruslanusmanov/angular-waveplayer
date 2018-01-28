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
import { WaveSurferComponent } from './components/wavesurfer/wavesurfer.component';
/*
requestAnimationFrame(() => {

  const wavesurfer = WaveSurfer.create({
    container: '.player-container',
    waveColor: '#a6c8fc',
    progressColor: '#fff'
  });
  wavesurfer.load('./../assets/audio/test.mp3');
  wavesurfer.playPause();
});
*/

@NgModule({
  declarations: [
    AppComponent,
    WaveSurferComponent
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
