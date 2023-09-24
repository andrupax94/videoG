import { Component } from '@angular/core';
import { Scene } from './class/scene';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  config = {
    type:Phaser.AUTO,
    width:800,
    height:600,
    scene:Scene
  }
  game = new Phaser.Game(this.config);
  constructor(){}
}
