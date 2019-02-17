# Multiplayer-phaser3-typescript
A template for a multiplayer Phaser 3 game using Typescript, Webpack, node and Socket.io

This is a WIP for a starting setup for multiplayer games with Phaser 3 and node. Right now I am working on the build process because it is a bit of a mess (I had to put notes on how to start it in the package.json file to remember). I am working to get one command to build and watch both the server- and client-side.

After that is complete, the plan is to create a re-usable template that includes the following, game-wise:

1. Authoritative server 
2. A simple Tiled tilemap to demonstrate server-side tilemap handling with collisions
3. Allow players to jump right in and see anyone else who is online 
4. Keyboard-based movement
5. Client-side prediction to provide responsive controls
6. Entity interpolation to show other players' movement smoothly
7. Latency compensation

If possible I may add some more "gamey" elements, such as the ability to attack each other. 


