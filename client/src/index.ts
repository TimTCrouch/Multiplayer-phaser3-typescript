import config from './Config';

import BootScene from './scenes/BootScene';
import ConnectScene from './scenes/ConnectScene';
import MainScene from './scenes/MainScene';

class Game extends Phaser.Game {
	constructor(conf) {
		super(conf);

		this.scene.add('Boot', BootScene);
		this.scene.add('Connect', ConnectScene);
		this.scene.add('Main', MainScene);
		this.scene.start('Boot');
	}
}

window.addEventListener("load", () => {
	var game = new Game(config);
});

