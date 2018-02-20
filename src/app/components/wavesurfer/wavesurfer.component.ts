import { Component, OnInit } from '@angular/core';

import * as WaveSurfer from 'wavesurfer.js';
import { Playlist } from '../../services/playlist';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  moduleId: module.id,
  selector: 'wave-surfer',
  templateUrl: 'wavesurfer.component.html',
  styleUrls: ['wavesurfer.component.sass']
})
export class WaveSurferComponent implements OnInit {
  private wavesurfer: WaveSurfer;
  private activeMusic: Playlist;
  private activeMusicId = 0;
  private playlist: Playlist[];

  constructor(private playlistService: PlaylistService) { }

  private getPlaylist(): void {
    this.playlistService.getPlaylist().subscribe(playlist => this.playlist = playlist);
  }

  private onPreviousButton(event) {
    this.activeMusicId--;
    this.musicUpdate();
  }

  private onPlayButton(event) {
    this.wavesurfer.playPause();
  }

  private onNextButton(event) {
    this.activeMusicId++;
    this.musicUpdate();
    console.log(this.activeMusicId);
  }

  private musicUpdate() {
    this.wavesurfer.load(this.activeMusic.url);
    this.wavesurfer.playPause();
  }

  ngOnInit() {
    this.getPlaylist();
    this.wavesurfer = WaveSurfer.create({
      container: '.player-container',
      waveColor: '#a6c8fc',
      progressColor: '#fff'
    });
    this.activeMusic = this.playlist[this.activeMusicId];
    console.log(this.activeMusicId);
    this.wavesurfer.load(this.activeMusic.url);
  }
}
