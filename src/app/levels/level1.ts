
import { Player } from "../player/player";
export class Level1 extends Phaser.Scene {

  constructor() {
    super({ key: 'Level1Scene' });
  }
  public cursor: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  public playerConfig=new Player();
  public sw = true;
  public preload() {
    this.load.image('red', 'assets/mainBackG.jpg');
    this.load.image('floor', 'assets/floor.png');
    this.playerConfig.preload(this);
  }

  public create() {
    // Añade la imagen de fondo
    let image = this.add.image(0, this.scale.height / 2, 'red');
    image.setOrigin(0, 0.5);
    image.setScale(this.scale.height / image.height);

    // Crea plataformas estáticas
    let platforms = this.physics.add.staticGroup();
    platforms.create(0, this.scale.height - 20, 'floor').setScale(2).refreshBody();

    this.playerConfig.create(this);

    this.physics.add.collider(this.playerConfig.player!, platforms);


  }
  override update() {

   this.playerConfig.update(this);
  }
}
