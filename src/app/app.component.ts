import { Component } from '@angular/core';
import { Level1 } from './levels/level1';
import { Level2 } from './levels/level2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  config = {
    type:Phaser.AUTO,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    physics:{
      default:'arcade',
      arcade:{
        gravity:{y:300},
        debug:false
      }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene:Level1
  }
  game = new Phaser.Game(this.config);

  constructor(){

  }
}
