
export class Level1 extends Phaser.Scene {

  constructor() {
    super({ key: 'Level1Scene' });
  }

  public static playerSpeed: number = 300
  preload() {
    this.load.image('red', 'assets/mainBackG.jpg');
    this.load.image('floor', 'assets/floor.png');
    this.load.spritesheet('pj', 'assets/Asset Pack-V1/Sprite Sheets/Character Idle 48x48.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('pjMove', 'assets/Asset Pack-V1/Sprite Sheets/run cycle 48x48.png', { frameWidth: 48, frameHeight: 48 });
  }

  create() {
    // Añade la imagen de fondo
    let image = this.add.image(0, this.scale.height / 2, 'red');
    image.setOrigin(0, 0.5);
    image.setScale(this.scale.height / image.height);

    // Crea plataformas estáticas
    let platforms = this.physics.add.staticGroup();
    platforms.create(0, this.scale.height - 20, 'floor').setScale(2).refreshBody();

    // Crea al jugador
    let player = this.physics.add.sprite(0, 0, 'pj').setScale(2).refreshBody();
    player.setCollideWorldBounds(true);
    player.setBounce(0.1);
    const offsetY = 15;
    player.body.setSize(player.width, player.height - offsetY);
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
    player.body.setGravityY(300);
    this.physics.add.collider(player, platforms);
    player.anims.play('stayQuiet');
    // Detecta cuando el jugador no está presionando ninguna tecla
    const keysPressed: { [key: string]: boolean } = {};

    // Detecta cuando el jugador presiona o suelta una tecla
    this.input.keyboard!.on('keydown', (event: KeyboardEvent) => {
      keysPressed[event.key] = true;
      handleMovement();
    });

    this.input.keyboard!.on('keyup', (event: KeyboardEvent) => {
      keysPressed[event.key] = false;
      handleMovement();
    });

    // Función para manejar la animación y la orientación del sprite
    function handleMovement() {
      const isMoving = keysPressed['ArrowLeft'] || keysPressed['ArrowRight'];

      if (isMoving) {
        if (keysPressed['ArrowRight']) {
          player.anims.play('move', true);
          player.setFlipX(false);
          player.setVelocityX(Level1.playerSpeed)
        } else if (keysPressed['ArrowLeft']) {
          player.anims.play('move', true);
          player.setFlipX(true);
          player.setVelocityX(-Level1.playerSpeed)
        }
      } else {
        player.anims.play('stayQuiet');
        player.setVelocityX(0)
      }
    }
  }
}
