"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHash = exports.encryptPassword = void 0;
const crypto_1 = __importDefault(require("crypto"));
const encryptPassword = (password) => {
    const salt = crypto_1.default.randomBytes(16).toString('hex');
    const hash = crypto_1.default.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
    return hash;
};
exports.encryptPassword = encryptPassword;
const checkHash = (password, hashedPassword) => {
    return password == hashedPassword;
};
exports.checkHash = checkHash;