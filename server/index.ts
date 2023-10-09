import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {
  hashPassword,
  comparePasswords,
  generatetoken,
} from "./utils/password";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});



app.post("/api/register", async (req: Request, res: Response) => {
  const { username: uname, email, password, prof_pic } = req.body;

  if (!uname || !password || !email) {
    return res.status(404).send("either username or password is missing");
  }

  try {
    const existing_user = await prisma.users.findFirst({
      where: {
        username: uname,
        email: email,
      },
    });

    if (existing_user) {
      return res.status(404).send("user already exists");
    }

    const new_user = await prisma.users.create({
      data: {
        username: uname,
        email: email,
        password: await hashPassword(password),
      },
    });

    const { id, created_at, username } = new_user;
    return res.status(200).send({
      id,
      username,
      created_at,
    });
  } catch (e) {
    console.error(e);
  }
});


app.post("/api/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!password || !email) {
    return res.status(404).send("either username or password is missing");
  }
  try {
    const existing_user = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });

    if (await comparePasswords(password, existing_user!.password)) {
      const token = generatetoken(
        existing_user!.id,
        existing_user!.email,
        existing_user!.username
      );
      return res.status(200).send({ token: token });
    } else {
      return res.status(401).send({ error: "incorrect password" });
    }
  } catch (e) {
    console.log(e);
  }
});



app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
