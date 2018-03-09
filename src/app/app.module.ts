import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  MdcTextFieldModule
} from '@angular-mdc/web';

// App imports
import { AppComponent } from './app.component';
import { WaveSurferComponent } from './components/wavesurfer/wavesurfer.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistService } from './services/playlist.service';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: AppComponent,
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
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    MdcButtonModule,
    MdcFabModule,
    MdcToolbarModule,
    MdcIconModule,
    MdcElevationModule,
    MdcDrawerModule,
    MdcListModule,
    MdcCardModule,
    MdcTextFieldModule
  ],
  providers: [
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
