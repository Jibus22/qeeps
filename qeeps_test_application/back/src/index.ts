import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import { usersRouter } from "./routes/users";
import { authRouter } from "./routes/auth";
import { populateDb, addRandomGuarantors } from "./mock/mockFactory";

declare module "express-session" {
  interface SessionData {
    user: string | null;
  }
}

const app = express();
const port = 3000;

const mongodb = {
  url: `mongodb://${process.env.ME_CONFIG_MONGODB_SERVER}`,
  user: process.env.ME_CONFIG_MONGODB_ADMINUSERNAME,
  pwd: process.env.ME_CONFIG_MONGODB_ADMINPASSWORD,
  dbName: "qeeps",
};

const sessionStore = MongoStore.create({
  mongoUrl: `mongodb://${process.env.ME_CONFIG_MONGODB_ADMINUSERNAME}:${process.env.ME_CONFIG_MONGODB_ADMINPASSWORD}@${process.env.ME_CONFIG_MONGODB_SERVER}`,
  dbName: mongodb.dbName,
});

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "supersecret",
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
};

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(session(sessionOptions));

app.use("/auth", authRouter);
app.use("/users", usersRouter);

main();

async function main() {
  try {
    await mongoose.connect(mongodb.url, {
      user: mongodb.user,
      pass: mongodb.pwd,
      dbName: mongodb.dbName,
    });

    await populateDb();
    await addRandomGuarantors();
  } catch (e) {
    console.error(`error connecting to the database: ${e}`);
    process.exit(1);
  }
  console.log("successfully connected to the database");

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
