/**
 * This Scene will be used for connecting to the server, preloading assets and setting some initial values retrieved.
 */
export default class ConnectScene extends Phaser.Scene {
	constructor(params) {
		super(params);
	}

	preload() {
		this.load.spritesheet('ranger', 'assets/images/characters/ranger_f.png',
			{frameWidth: 32, frameHeight: 36});
	}

	create() {
		this.add.sprite(400, 300, 'phaserLogo');
	}

	update() {
		//simulate connecting to server for now
		setTimeout(() => {
			this.scene.start('Main');
		}, 1000);
	}
}