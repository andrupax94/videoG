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
      preload: ()=>this.preload.bind(this), // Vincular manualmente el contexto
      create: ()=>this.create.bind(this), // Vincular manualmente el contexto
      update: ()=>this.update.bind(this) // Vincular manualmente el contexto
    }
  }
  game = new Phaser.Game(this.config);
  constructor(){
  }
  preload(t:Phaser.Scene){
    t.load.image('back','/assets/mainBackG.jpg');
  }
  create(t:Phaser.Scene){

  }
  update(t:Phaser.Scene){

  }
}
