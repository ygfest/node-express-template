"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = __importDefault(require("./config/env"));
const server = app_1.default.listen(env_1.default.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on http://localhost:${env_1.default.port}`);
});
process.on("SIGINT", () => {
    server.close(() => process.exit(0));
});
