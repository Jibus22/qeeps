import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { usersRouter } from "./routes/users";

const app = express();
const port = 3000;

const mongodb = {
  url: `mongodb://${process.env.ME_CONFIG_MONGODB_SERVER}`,
  user: process.env.ME_CONFIG_MONGODB_ADMINUSERNAME,
  pwd: process.env.ME_CONFIG_MONGODB_ADMINPASSWORD,
  dbName: "qeeps",
};

app.use(express.json());
app.use("/users", usersRouter);

main();

async function main() {
  try {
    await mongoose.connect(mongodb.url, {
      user: mongodb.user,
      pass: mongodb.pwd,
      dbName: mongodb.dbName,
    });

    app.use(
      session({
        secret: process.env.SESSION_SECRET || "supersecret",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
          client: mongoose.connection.getClient(),
          dbName: mongodb.dbName,
        }),
      })
    );
  } catch (e) {
    console.error(`error connecting to the database: ${e}`);
    process.exit(1);
  }
  console.log("successfully connected to the database");

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
