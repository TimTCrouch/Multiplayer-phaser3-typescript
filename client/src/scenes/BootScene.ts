/**
 * The basic preload Scene. Keep this Scene lightweight and only preload what is needed for a loading screen.
 */
export default class BootScene extends Phaser.Scene {
	constructor(params) {
		super(params);
	}

	preload() {
		this.load.image('phaserLogo', 'assets/images/phaser.png');
	}

	create() {
		this.scene.start('Connect');
	}
}