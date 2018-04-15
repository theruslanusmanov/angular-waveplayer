import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playlists } from './playlists';
import { PLAYLISTS } from './mock-playlists';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PlaylistsService {

  constructor() {}

  getPlaylists(): Observable<Playlists[]> {
    return of(PLAYLISTS);
  }
}
