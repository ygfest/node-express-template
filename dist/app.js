"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
const middlewares_1 = require("./middlewares");
const logger_1 = require("./config/logger");
const app = (0, express_1.default)();
// Security & common middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(logger_1.httpLogger);
// Routes
app.use("/api", routes_1.default);
// 404 and error handlers
app.use(middlewares_1.notFoundHandler);
app.use(middlewares_1.errorHandler);
exports.default = app;
