"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const password_1 = require("./utils/password");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.post("/api/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username: uname, email, password, prof_pic } = req.body;
    if (!uname || !password || !email) {
        return res.status(404).send("either username or password is missing");
    }
    try {
        const existing_user = yield prisma.users.findFirst({
            where: {
                username: uname,
                email: email,
            },
        });
        if (existing_user) {
            return res.status(404).send("user already exists");
        }
        const new_user = yield prisma.users.create({
            data: {
                username: uname,
                email: email,
                password: yield (0, password_1.hashPassword)(password),
            },
        });
        const { id, created_at, username } = new_user;
        return res.status(200).send({
            id,
            username,
            created_at,
        });
    }
    catch (e) {
        console.error(e);
    }
}));
app.post("/api/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!password || !email) {
        return res.status(404).send("either username or password is missing");
    }
    try {
        const existing_user = yield prisma.users.findFirst({
            where: {
                email: email,
            },
        });
        if (yield (0, password_1.comparePasswords)(password, existing_user.password)) {
            const token = (0, password_1.generatetoken)(existing_user.id, existing_user.email, existing_user.username);
            return res.status(200).send({ token: token });
        }
        else {
            return res.status(401).send({ error: "incorrect password" });
        }
    }
    catch (e) {
        console.log(e);
    }
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
