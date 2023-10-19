import { Animations } from "./animations";
export class Player{
  public cursor: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  public playerSpeed: number = 300;
  public player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;
  public preload(Scene:Phaser.Scene) {
    Scene.load.spritesheet('pj', 'assets/Asset Pack-V1/Sprite Sheets/Character Idle 48x48.png', { frameWidth: 48, frameHeight: 48 });
    Scene.load.spritesheet('pjMove', 'assets/Asset Pack-V1/Sprite Sheets/run cycle 48x48.png', { frameWidth: 48, frameHeight: 48 });
    Scene.load.spritesheet('pjJump', 'assets/Asset Pack-V1/Sprite Sheets/player jump 48x48.png', { frameWidth: 48, frameHeight: 48 });
  }
  public create(Scene:Phaser.Scene) {
    // Crea al jugador

    this.player = Scene.physics.add.sprite(0, 0, 'pj').setScale(2).refreshBody();
    this.player.setCollideWorldBounds(true);
    this.player.setBounce(0.1);
    const offsetY = 15;
    this.player.body.setSize(this.player.width, this.player.height - offsetY);

    let animation=new Animations(Scene);

    this.player.body.setGravityY(300);
    // Detecta cuando el jugador no está presionando ninguna tecla
    this.cursor = Scene.input.keyboard?.createCursorKeys();
    // Detecta cuando el jugador presiona o suelta una tecla
  }
  public update(Scene:Phaser.Scene) {

    if (this.cursor?.left.isDown) {
      if (this.player!.body.touching.down)
        this.player!.anims.play('move', true);
      this.player!.setFlipX(true);
      this.player!.setVelocityX(-this.playerSpeed);

    } else if (this.cursor?.right.isDown) {
      if (this.player!.body.touching.down)
        this.player!.anims.play('move', true);
      this.player!.setFlipX(false);
      this.player!.setVelocityX(this.playerSpeed);

    } else if (this.cursor?.up.isDown&&this.player!.body.touching.down) {

      this.player!.setVelocityY(-500);
    }else if(!this.player!.body.touching.down){
      this.player!.anims.play('jump', true)
    }
     else {
      this.player!.anims.play('stayQuiet', true)
      this.player!.setVelocityX(0);
    }
    return this.player;
  }
}
