import {NetworkScene} from "./NetworkScene";

export default class MainScene extends NetworkScene {
	private phaserSprite: Phaser.GameObjects.Sprite;
	private map: Phaser.Tilemaps.Tilemap;

	constructor() {
		super({
			key: 'Main'
		});
	}

	preload(): void {
		this.load.image('cloud_tileset', 'assets/images/tilesets/cloud_tileset.png');
		this.load.tilemapTiledJSON('map', 'assets/maps/MultiplayerPhaserMap.json');
	}

	create(): void {
		this.map = this.add.tilemap('map');
		const cloud_tileset = this.map.addTilesetImage('cloud_tileset', 'cloud_tileset');
		const backgroundLayer = this.map.createStaticLayer('Background', cloud_tileset);
		const propsBackgroundLayer = this.map.createStaticLayer('PropsBackground', cloud_tileset);
		const propsForegroundLayer = this.map.createStaticLayer('PropsForeground', cloud_tileset);

	}
}