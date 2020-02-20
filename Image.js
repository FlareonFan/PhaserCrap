var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image({
        key: 'zoe',
        url: 'images/zoe.png'
    });

    this.load.image('hp', 'images/healthbar.png');
}

function create ()
{
    this.add.image(30, 30, 'zoe');
    this.add.image(148, 30, 'hp');
}
