import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playlist } from './playlist';
import { PLAYLIST } from './mock-playlist';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PlaylistService {

  constructor() {}

  getPlaylist(): Observable<Playlist[]> {
    return of(PLAYLIST);
  }
}
