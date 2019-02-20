// import "phaser";
// import { MainScene } from "./scenes/MainScene";
//
// // main game configuration
// const config: GameConfig = {
// 	width: 800,
// 	height: 592,
// 	type: Phaser.AUTO,
// 	parent: "game",
// 	scene: MainScene,
// };
//
// // game class
// export class Game extends Phaser.Game {
// 	constructor(config: GameConfig) {
// 		super(config);
// 	}
// }
//
// // when the page is loaded, create our game instance
// window.addEventListener("load", () => {
// 	var game = new Game(config);
// });

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

