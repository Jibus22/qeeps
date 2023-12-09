import mockdata from "./MOCK_DATA.json";
import { IUser, User } from "../models/user";

async function populateDb() {
  const cnt = await User.countDocuments({});

  if (cnt < 5)
    await Promise.all(
      mockdata.map(async (elem: IUser) => {
        const user = new User(elem);
        user.save().catch((e) => console.error(`error creating user: ${e}`));
      })
    );
}

export { populateDb };
