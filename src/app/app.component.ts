import { Component } from '@angular/core';
import * as Phaser from 'phaser';

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
    scene:{
      performance:this.preload,
      create:this.create,
      update:this.update
    }
  }
  game = new Phaser.Game(this.config);

  preload(){

  }
  create(){

  }
  update(){

  }

  constructor(){}
}
