import express from "express";
import { User } from "../models/user";

const router = express.Router();

router.post(
  "/login",
  express.urlencoded({ extended: false }),
  async (req, res) => {
    try {
      const user = await User.find(req.body);
      if (!user.length)
        return res.status(404).json({ message: "cannot find user" });

      console.log(req.session);
      req.session.regenerate(function (err) {
        if (err) throw new Error("session error");

        req.session.user = user[0].id;

        // save the session before redirection to ensure page
        // load does not happen before session is saved
        req.session.save(function (err) {
          if (err) throw new Error("error while saving session");
          res.redirect("/");
        });
      });
    } catch (e) {
      return res.status(500).json({ message: e });
    }
  }
);

export { router as authRouter };
