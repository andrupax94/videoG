export class Animations{
    constructor(Scene:Phaser.Scene){
      Scene.anims.create({
        key: 'stayQuiet',
        frames: Scene.anims.generateFrameNumbers('pj', { start: 0, end: 9 }),
        frameRate: 10,
        repeat: -1
      });
      Scene.anims.create({
        key: 'move',
        frames: Scene.anims.generateFrameNumbers('pjMove', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
      });
      Scene.anims.create({
        key: 'jump',
        frames: Scene.anims.generateFrameNumbers('pjJump', { start: 0, end: 2 }),
        frameRate: 3,
        repeat: 0
      });
    }
}
