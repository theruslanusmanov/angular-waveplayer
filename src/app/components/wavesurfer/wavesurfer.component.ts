import { Component, OnInit } from '@angular/core';

import * as WaveSurfer from 'wavesurfer.js';

@Component({
    selector: 'wave-surfer',
    templateUrl: 'wavesurfer.component.html',
    styleUrls: ['wavesurfer.component.sass']
})
export class WaveSurferComponent implements OnInit {
  public wavesurfer;

  onPlay(event) {
    this.wavesurfer.playPause();
  }

  ngOnInit() {
    this.wavesurfer = WaveSurfer.create({
      container: '.player-container',
      waveColor: '#a6c8fc',
      progressColor: '#fff'
    });
    this.wavesurfer.load('./../assets/audio/test.mp3');
  }
}
