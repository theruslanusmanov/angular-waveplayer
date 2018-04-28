import { Component, OnInit, Input } from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';

@Component({
  moduleId: module.id,
  selector: 'wave-surfer',
  templateUrl: 'wavesurfer.component.html',
  styleUrls: ['wavesurfer.component.sass']
})
export class WaveSurferComponent implements OnInit {

  @Input() wavesurfer;
  @Input() playlist;
  @Input() playStatus;
  @Input() activeMusic;
  @Input() activeMusicId;
  @Input() waveColor;

  constructor() { }

  onPreviousButton(event) {
    this.activeMusicId--;
    this.musicUpdate();
  }

  onPlayButton(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.playStatus === false) {
      this.playStatus = true;
      this.wavesurfer.play();
    } else {
      this.playStatus = false;
      this.wavesurfer.pause();
    }
  }

  onNextButton(event) {
    this.activeMusicId++;
    this.musicUpdate();
  }

  onPlayerClick(event) {
    event.preventDefault();
    event.stopPropagation();
    const time = this.wavesurfer.getDuration();
    const width = this.getPlayerWidth();
    const position = event.clientX;
    const currentTime = this.getCurrentTime(time, width, position);
    this.wavesurfer.setCurrentTime(currentTime);
  }

  getPlayerWidth() {
    const playerContainer = document.getElementsByClassName('play-controls')[0];
    return playerContainer.getBoundingClientRect().width;
  }

  getCurrentTime(time, width, position) {
    const unitTime = time / 100;
    const unitWidth = width / 100;
    const units = position / unitWidth;
    return unitTime * units;
  }

  musicUpdate() {
    this.activeMusic = this.playlist[this.activeMusicId];
    this.wavesurfer.load(this.activeMusic.url);
    if (this.playStatus === true) {
      this.wavesurfer.play();
    } else {
      this.wavesurfer.pause();
    }
  }

  ngOnInit() {
    this.wavesurfer = new WaveSurfer({
      height: '80',
      container: '.player-container',
      waveColor: this.waveColor,
      progressColor: '#fff',
      backend: 'MediaElement'
    });
    this.wavesurfer.init();
    this.wavesurfer.load(this.activeMusic.url);
  }
}
