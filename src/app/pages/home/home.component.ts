import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ PlayerComponent ],
  template: `
    <app-player></app-player>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
