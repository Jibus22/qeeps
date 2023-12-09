import express, { Request, Response, NextFunction } from "express";
import { IUserKeys, User } from "../models/user";

interface customRes extends Response {
  user?: any;
}

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

router.get("/:id", getUser, (req, res: customRes) => {
  res.json(res.user);
});

router.post("/", async (req, res) => {
  const user = new User({
    type: req.body.type,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    birthdate: req.body.birthdate,
    address: req.body.address,
    income: req.body.income,
    job: req.body.job,
    situation: req.body.situation,
    guarantor: req.body.guarantor,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

router.patch("/:id", getUser, async (req, res: customRes) => {
  try {
    for (let [key, value] of Object.entries(req.body)) {
      if (IUserKeys.includes(key)) res.user[key] = value;
    }

    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

router.delete("/:id", getUser, async (req, res: customRes) => {
  try {
    await res.user.deleteOne();
    res.json({ message: "deleted user" });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

async function getUser(req: Request, res: customRes, next: NextFunction) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "cannot find user" });
  } catch (e) {
    return res.status(500).json({ message: e });
  }

  res.user = user;
  next();
}

export { router as usersRouter };
