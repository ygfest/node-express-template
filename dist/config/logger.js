"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpLogger = void 0;
const morgan_1 = __importDefault(require("morgan"));
exports.httpLogger = (0, morgan_1.default)(process.env.NODE_ENV !== "production" ? "dev" : "combined");
exports.default = exports.httpLogger;
