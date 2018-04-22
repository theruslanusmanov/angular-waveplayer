import { Component, OnInit } from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';
import {Playlist} from '../../services/playlist';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'play-app',
  templateUrl: './play-app.component.html',
  styleUrls: ['./play-app.component.sass']
})
export class PlayAppComponent {
  status = true;
  playlist: Playlist[];
  wavesurfer: WaveSurfer;
  playStatus = false;
  activeMusic;
  activeMusicId = 0;

  constructor(private playlistService: PlaylistService) {
    this.wavesurfer = WaveSurfer;
    this.getPlaylist();
    this.activeMusic = this.playlist[this.activeMusicId];

    this.playlistService.changeIdEmitted$.subscribe(
      id => {
        this.activeMusicId = id;
        this.activeMusic = this.playlist[this.activeMusicId];
        console.log(this.activeMusicId);
      });
  }

  private getPlaylist(): void {
    this.playlistService.getPlaylist().subscribe(playlist => this.playlist = playlist);
  }

  onDrawerClick(event) {
    event.preventDefault();
    if (this.status === true) {
      this.status = false;
    } else {
      this.status = true;
    }
  }
}
