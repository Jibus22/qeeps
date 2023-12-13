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

async function addRandomGuarantors() {
  try {
    const users = await User.where("type").equals("candidate").limit(10);
    const guarantors = await User.where("type").equals("guarantor").limit(20);
    for (let i = 0; i < users.length && i * 2 < guarantors.length; i++) {
      if (users[i].guarantor && (users[i].guarantor?.length ?? [""].length > 0))
        return;
      users[i].guarantor?.push(guarantors[i + i]);
      users[i].guarantor?.push(guarantors[i + i + 1]);
      await users[i].save();
      console.log("Guarantor successfully added to user");
      console.log(users[i]);
    }
  } catch (e) {
    console.error(`failed to add guarantors: ${e}`);
  }
}

export { populateDb, addRandomGuarantors };
