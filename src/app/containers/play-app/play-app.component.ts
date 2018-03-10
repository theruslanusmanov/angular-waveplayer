import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'play-app',
  templateUrl: './play-app.component.html',
  styleUrls: ['./play-app.component.sass']
})
export class PlayAppComponent implements OnInit {
  status = true;

  constructor() { }

  onDrawerClick(event) {
    event.preventDefault();
    if (this.status === true) {
      this.status = false;
    } else {
      this.status = true;
    }
  }

  ngOnInit() {
  }

}
