import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playlist } from './playlist';
import { PLAYLIST } from './mock-playlist';
import { of } from 'rxjs/observable/of';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PlaylistService {
  // Observable string sources
  private emitChangeIdSource = new Subject<any>();

  // Observable string streams
  changeIdEmitted$ = this.emitChangeIdSource.asObservable();
  
  // Service message commands
  emitChangeId(change: any) {
    this.emitChangeIdSource.next(change);
  }

  constructor() {}

  getPlaylist(): Observable<Playlist[]> {
    return of(PLAYLIST);
  }


}
