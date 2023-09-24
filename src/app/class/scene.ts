
export class Scene extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('red', 'assets/mainBackG.jpg');
    }

    create ()
    {
      this.add.image(400,400,'red');
    }
}
