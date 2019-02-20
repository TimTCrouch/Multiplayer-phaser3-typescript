/**
 * This Scene will be used for connecting to the server, preloading assets and setting some initial values retrieved.
 */
export default class ConnectScene extends Phaser.Scene {
	constructor(params) {
		super(params);
	}

	preload() {
		// this.load.image('cloud_tileset', 'assets/images/tilesets/cloud_tileset.png');
		// this.load.tilemapTiledJSON('map', 'assets/maps/MultiplayerPhaserMap.json');

		this.add.sprite(400, 300, 'phaserLogo');
	}

	create() {
		//simulate connecting to server for now
		setTimeout(() => {
			this.scene.start('Main');
		}, 1000);
	}
}