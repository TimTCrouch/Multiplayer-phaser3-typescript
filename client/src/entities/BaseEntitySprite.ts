import {EntityDirection} from './stateMembers/EntityDirection';

export default class BaseEntitySprite extends Phaser.GameObjects.Sprite {
	private currentScene: Phaser.Scene;
	private vx: number;
	private vy: number;
	private readonly spriteKey: string;
	private entityDirection: EntityDirection = EntityDirection.none;

	constructor(scene: Phaser.Scene, x: number, y: number, key: string, frame: number) {
		super(scene, x, y, key, frame);

		this.spriteKey = key;
		this.currentScene = scene;
		this.initializeSprite();
		this.currentScene.add.existing(this);
	}

	private initializeSprite(): void {
		this.setOrigin(0);
	}

	protected getCurrentScene(): Phaser.Scene {
		return this.currentScene;
	}

	protected setEntityDirection(): void {
		if (this.vx === 0 && this.vy === 0) {
			this.entityDirection = EntityDirection.none;
		} else if (this.vx === 0 && this.vy < 0) {
			this.entityDirection = EntityDirection.up;
		} else if (this.vx === 0 && this.vy > 0) {
			this.entityDirection = EntityDirection.down;
		} else if (this.vx < 0 && this.vy === 0) {
			this.entityDirection = EntityDirection.left;
		} else if (this.vx > 0 && this.vy === 0) {
			this.entityDirection = EntityDirection.right;
		} else if (this.vx < 0 && this.vy < 0) {
			this.entityDirection = EntityDirection.upLeft;
		} else if (this.vx > 0 && this.vy < 0) {
			this.entityDirection = EntityDirection.upRight;
		} else if (this.vx < 0 && this.vy > 0) {
			this.entityDirection = EntityDirection.downLeft;
		} else if (this.vx > 0 && this.vy > 0) {
			this.entityDirection = EntityDirection.downRight;
		}
	}

	protected setDirectionalAnimation(): void {
		if (this.entityDirection === EntityDirection.up ||
			this.entityDirection === EntityDirection.upLeft ||
		    this.entityDirection === EntityDirection.upRight) {
			this.anims.play('up', true);
		} else if (this.entityDirection === EntityDirection.down ||
			this.entityDirection === EntityDirection.downLeft ||
			this.entityDirection === EntityDirection.downRight) {
			this.anims.play('down', true);
		} else if (this.entityDirection === EntityDirection.left) {
			this.anims.play('left', true);
		} else if (this.entityDirection === EntityDirection.right) {
			this.anims.play('right', true);
		}
	}

	public getEntityDirection(): EntityDirection {
		return this.entityDirection;
	}

	public setVelocityX(newVX: number): void {
		this.vx = newVX;
	}

	public setVelocityY(newVY: number): void {
		this.vy = newVY;
	}

	public updatePosition(delta: number): void {
		this.x += this.vx * delta;
		this.y += this.vy * delta;
	}

	public setAnimation(config: Phaser.Animations.Types.Animation, start: number, end:number): void {
		config.frames = this.currentScene.anims.generateFrameNumbers(this.spriteKey, {start, end});
		this.currentScene.anims.create(config);
	}
}