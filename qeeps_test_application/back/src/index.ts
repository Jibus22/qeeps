import express from "express";
import mongoose from "mongoose";
import { router as usersRouter } from "./routes/users";

const app = express();
const port = 3000;

const mongodb = {
  url: `mongodb://${process.env.ME_CONFIG_MONGODB_SERVER}:27017/`,
  user: process.env.ME_CONFIG_MONGODB_ADMINUSERNAME,
  pwd: process.env.ME_CONFIG_MONGODB_ADMINPASSWORD,
};

mongoose
  .connect(mongodb.url, {
    user: mongodb.user,
    pass: mongodb.pwd,
  })
  .then(() => {
    console.log("successfully connected to the database");
  })
  .catch((err) => {
    console.error(`error connecting to the database: ${err}`);
    process.exit(1);
  });

app.use(express.json());
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
