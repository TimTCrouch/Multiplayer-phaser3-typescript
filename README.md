# Multiplayer-phaser3-typescript
A template for a multiplayer Phaser 3 game using Typescript, Webpack, node and Socket.io

This is a WIP for a starting setup for multiplayer games with Phaser 3 and node. I am working on getting the initial foundation of the template setup. The build process is a bit rough right now but it works. You just have to start 3 different bash tools to compile and serve the project. I will swing back around to this in a little bit and try to clean house and simplify. 

Right now, the plan is to create a re-usable template that includes the following, game-wise:

1. Authoritative server 
2. A simple Tiled tilemap to demonstrate server-side tilemap handling with collisions
3. Allow players to jump right in and see anyone else who is online 
4. Keyboard-based movement
5. Client-side prediction to provide responsive controls
6. Entity interpolation to show other players' movement smoothly
7. Latency compensation
8. Speed hack prevention as example of server-side validation

If possible I may add some more "gamey" elements, such as the ability to attack each other. 


