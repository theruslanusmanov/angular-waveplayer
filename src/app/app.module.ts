import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  MdcTextFieldModule,
  MdcSliderModule
} from '@angular-mdc/web';

// App imports
import { AppComponent } from './app.component';
import { WaveSurferComponent } from './components/wavesurfer/wavesurfer.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistService } from './services/playlist.service';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlayAppComponent } from './containers/play-app/play-app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.components';
import { PlaylistsComponent } from './components/playlists/playlists.components';
import { PlaylistsService } from './services/playlists.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  /*
  {
    path: 'home',
    component: PlaylistComponent,
  },
  */
  {
    path: 'home',
    component: PlaylistComponent,
  },
  {
    path: 'playlists/:playlist-url',
    component: PlaylistComponent,
  },
  {
    path: 'playlists',
    component: PlaylistsComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WaveSurferComponent,
    PlaylistComponent,
    LoginComponent,
    PageNotFoundComponent,
    PlayAppComponent,
    SettingsComponent,
    HomeComponent,
    PlaylistsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    MdcButtonModule,
    MdcFabModule,
    MdcToolbarModule,
    MdcIconModule,
    MdcElevationModule,
    MdcDrawerModule,
    MdcListModule,
    MdcCardModule,
    MdcTextFieldModule,
    MdcSliderModule,
  ],
  providers: [
    PlaylistService,
    PlaylistsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
