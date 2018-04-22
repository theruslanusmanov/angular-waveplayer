import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  private onPreviousButton(event) {
    this.activeMusicId--;
    this.musicUpdate();
  }

  private onPlayButton(event) {
    this.playStatus = !this.playStatus;
    this.wavesurfer.playPause();
  }

  private onNextButton(event) {
    this.activeMusicId++;
    this.musicUpdate();
  }

  private musicUpdate() {
    this.activeMusic = this.playlist[this.activeMusicId];
    this.wavesurfer.load(this.activeMusic.url);
    if (this.playStatus === true) {
      this.wavesurfer.play();
    } else {
      this.wavesurfer.pause();
    }
  }

  ngOnInit() {
    this.wavesurfer = this.wavesurfer.create({
      container: '.player-container',
      waveColor: '#97C4D2',
      progressColor: '#fff',
      backend: 'MediaElement'
    });
    this.wavesurfer.load(this.activeMusic.url);
  }
}
