import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../services/playlists.service';
import { Playlists } from '../../services/playlists';

@Component({
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.sass']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlists[];

  constructor(private playlistService: PlaylistsService) { }

  getPlaylists(): void {
    this.playlistService.getPlaylists().subscribe(playlists => this.playlists = playlists);
  }

  ngOnInit() {
    this.getPlaylists();
  }
}
