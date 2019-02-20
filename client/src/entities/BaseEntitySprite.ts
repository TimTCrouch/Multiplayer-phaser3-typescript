
export default class BaseEntitySprite extends Phaser.GameObjects.Sprite {
	private currentScene: Phaser.Scene;

	constructor(params) {
		super(params.scene, params.x, params.y, params.key, params.frame);

		this.currentScene = params.scene;
		this.initializeSprite();
		this.currentScene.add.existing(this);
	}

	private initializeSprite(): void {
		this.setOrigin(0);
	}
}