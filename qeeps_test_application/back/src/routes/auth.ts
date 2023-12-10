import express from "express";
import { User } from "../models/user";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await User.find(req.body);
    if (!user.length)
      return res.status(404).json({ message: "authentication error" });

    req.session.regenerate(function (err) {
      if (err) throw new Error("session error");

      req.session.user = user[0].id;

      req.session.save(function (err) {
        if (err) throw new Error("error while saving session");
        res.json({ message: "signed in" });
      });
    });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
});

router.get("/logout", function (req, res) {
  try {
    req.session.user = null;

    req.session.save(function (err) {
      if (err) throw new Error("session logout error");

      req.session.regenerate(function (err) {
        if (err) throw new Error("session logout error");
        res.json({ message: "signed out" });
      });
    });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
});

export { router as authRouter };
