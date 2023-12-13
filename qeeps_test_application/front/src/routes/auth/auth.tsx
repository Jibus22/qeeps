import { Outlet, redirect } from "react-router-dom";

export async function loader() {
  try {
    const response = await fetch("http://localhost:3000/users/me", {
      credentials: "include",
    });

    if (response.ok) return redirect("/");
  } catch (e) {
    console.error(e);
  }

  return null;
}

export default function Auth() {
  return (
    <>
      <Outlet />
    </>
  );
}
