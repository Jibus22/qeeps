import { Outlet } from "react-router-dom";

export async function loader() {
  // redirect to root if user has a session
  return null;
}

export default function Auth() {
  return (
    <>
      <Outlet />
    </>
  );
}
