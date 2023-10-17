
export class Level1 extends Phaser.Scene {

  constructor() {
    super({ key: 'Level1Scene' });
  }
  public cursor: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  public playerSpeed: number = 300;
  public player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;
  public sw = true;
  public preload() {
    this.load.image('red', 'assets/mainBackG.jpg');
    this.load.image('floor', 'assets/floor.png');
    this.load.spritesheet('pj', 'assets/Asset Pack-V1/Sprite Sheets/Character Idle 48x48.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('pjMove', 'assets/Asset Pack-V1/Sprite Sheets/run cycle 48x48.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('pjJump', 'assets/Asset Pack-V1/Sprite Sheets/player jump 48x48.png', { frameWidth: 48, frameHeight: 48 });
  }

  public create() {
    // Añade la imagen de fondo
    let image = this.add.image(0, this.scale.height / 2, 'red');
    image.setOrigin(0, 0.5);
    image.setScale(this.scale.height / image.height);

    // Crea plataformas estáticas
    let platforms = this.physics.add.staticGroup();
    platforms.create(0, this.scale.height - 20, 'floor').setScale(2).refreshBody();

    // Crea al jugador
    this.player = this.physics.add.sprite(0, 0, 'pj').setScale(2).refreshBody();
    this.player.setCollideWorldBounds(true);
    this.player.setBounce(0.1);
    const offsetY = 15;
    this.player.body.setSize(this.player.width, this.player.height - offsetY);
    // Crea la animación 'stayQuiet'
    this.anims.create({
      key: 'stayQuiet',
      frames: this.anims.generateFrameNumbers('pj', { start: 0, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'move',
      frames: this.anims.generateFrameNumbers('pjMove', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('pjJump', { start: 0, end: 2 }),
      frameRate: 3,
      repeat: 0
    });
    this.player.body.setGravityY(300);
    this.physics.add.collider(this.player, platforms);

    // Detecta cuando el jugador no está presionando ninguna tecla

    this.cursor = this.input.keyboard?.createCursorKeys();
    // Detecta cuando el jugador presiona o suelta una tecla

  }
  override update() {

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

        this.player!.setVelocityY(-350);
    }else if(!this.player!.body.touching.down){
      this.player!.anims.play('jump', true)
    }
     else {
      this.player!.anims.play('stayQuiet', true)
      this.player!.setVelocityX(0);
    }
  }
}
