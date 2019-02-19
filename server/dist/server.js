"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const port = 8080; // default port to listen
app.use(express_1.default.static(path_1.default.join(__dirname, '/../../client/dist')));
app.use(express_1.default.static(path_1.default.join(__dirname, '/../../client/', 'node_modules', 'phaser', 'dist')));
app.use(express_1.default.static(path_1.default.join(__dirname, '/../../client/public')));
app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(path_1.default.join(__dirname, '/../../client/index.html'));
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map