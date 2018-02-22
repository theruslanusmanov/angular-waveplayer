import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports of MDC Angular components
import {
  MdcButtonModule,
  MdcFabModule,
  MdcToolbarModule,
  MdcIconModule,
  MdcElevationModule,
  MdcDrawerModule,
  MdcListModule,
  MdcCardModule,
} from '@angular-mdc/web';

// App imports
import { AppComponent } from './app.component';
import { WaveSurferComponent } from './components/wavesurfer/wavesurfer.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistService } from './services/playlist.service';

@NgModule({
  declarations: [
    AppComponent,
    WaveSurferComponent,
    PlaylistComponent
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
  providers: [
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
