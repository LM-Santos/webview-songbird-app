import { Component } from '@angular/core';
import { AlbumCoverComponent } from '../../shared/components/album-cover/album-cover.component';
import { SongInfoComponent } from '../../shared/components/song-info/song-info.component';
import { PlayBarComponent } from '../../shared/components/play-bar/play-bar.component';
import { PlayerButtonsComponent } from '../../shared/components/player-buttons/player-buttons.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [ 
    AlbumCoverComponent,
    SongInfoComponent,
    PlayBarComponent,
    PlayerButtonsComponent,
   ],
  template: `
    <main class="player-container">
      <app-album-cover></app-album-cover> 
      <app-song-info></app-song-info>
      <app-play-bar></app-play-bar>
      <app-player-buttons></app-player-buttons>
    </main>
  `,
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  
}
