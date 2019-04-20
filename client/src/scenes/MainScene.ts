import {NetworkScene} from "./NetworkScene";
import {PlayerEntity} from '../entities/PlayerEntity';

export default class MainScene extends NetworkScene {
	private player: PlayerEntity;

	constructor() {
		super({
			key: 'Main'
		});
	}

	preload(): void {

	}

	create(): void {
		this.player = new PlayerEntity(this, 100, 100, 'ranger', 7);
	}

	update(time: number, delta: number) {
		this.player.update(delta);
	}
}