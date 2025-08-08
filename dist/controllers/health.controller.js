"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHealth = void 0;
const getHealth = (_req, res) => {
    res.json({ status: "ok", uptime: process.uptime() });
};
exports.getHealth = getHealth;
