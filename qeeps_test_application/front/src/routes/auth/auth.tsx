import { Outlet, redirect } from "react-router-dom";

export async function loader() {
  const response = await fetch("http://localhost:3000/users/me", {
    credentials: "include",
  });

  if (response.ok) return redirect("/");

  return null;
}

export default function Auth() {
  return (
    <>
      <Outlet />
    </>
  );
}
