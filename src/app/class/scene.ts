
export class Scene extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('red', 'assets/mainBackG.jpg');
        this.load.spritesheet('pj','assets/mainBackG.jpg',{frameWidth:80,frameHeight:80});
    }

    create ()
    {
      this.add.image(400,400,'red');
    }
}
