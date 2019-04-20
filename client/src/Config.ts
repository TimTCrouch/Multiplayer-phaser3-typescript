import 'phaser';
import Config = Phaser.Core.Config;

export default new Config({
	width: 800,
	height: 592,
	type: Phaser.AUTO,
	fps: {
		target: 15
	},
	parent: "game"
})