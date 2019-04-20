import BaseEntitySprite from './BaseEntitySprite';
import {EntityDirection} from './stateMembers/EntityDirection';
import CursorKeys = Phaser.Input.Keyboard.CursorKeys;

export class PlayerEntity extends BaseEntitySprite {
	private readonly PLAYER_UPDATE_RATE: number = 10;
	private readonly PLAYER_DEFAULT_SPEED: number = 0.1875;
	private cursors: CursorKeys;

	constructor(scene: Phaser.Scene, x: number, y: number, key: string, frame: number) {
		super(scene, x, y, key, frame);
		this.createAnimations();
		this.setupKeyboard();
	}

	private createAnimations(): void {
		this.setAnimation({
			key: 'up',
			frameRate: this.PLAYER_UPDATE_RATE,
			repeat: -1
		}, 0, 2);
		this.setAnimation({
			key: 'right',
			frameRate: this.PLAYER_UPDATE_RATE,
			repeat: -1
		}, 3, 5);
		this.setAnimation({
			key: 'down',
			frameRate: this.PLAYER_UPDATE_RATE,
			repeat: -1
		}, 6, 8);
		this.setAnimation({
			key: 'left',
			frameRate: this.PLAYER_UPDATE_RATE,
			repeat: -1
		}, 9, 11);
	}

	private setupKeyboard(): void {
		this.cursors = this.getCurrentScene().input.keyboard.createCursorKeys();
	}

	private updatePlayerVelocity(delta: number): void {
		if (this.cursors.left.isDown) {
			this.setVelocityX(-this.PLAYER_DEFAULT_SPEED);
		} else if (this.cursors.right.isDown) {
			this.setVelocityX(this.PLAYER_DEFAULT_SPEED);
		} else {
			this.setVelocityX(0);
		}

		if (this.cursors.up.isDown) {
			this.setVelocityY(-this.PLAYER_DEFAULT_SPEED);
		} else if (this.cursors.down.isDown) {
			this.setVelocityY(this.PLAYER_DEFAULT_SPEED);
		} else {
			this.setVelocityY(0);
		}
	}

	private updateAnimation(): void {
		if (this.getEntityDirection() !== EntityDirection.none) {
			this.setDirectionalAnimation();
		} else {
			this.setFrame(7);
		}
	}

	public update(delta: number): void {
		this.updatePlayerVelocity(delta);
		this.setEntityDirection();
		this.updateAnimation();
		this.updatePosition(delta);
	}
}