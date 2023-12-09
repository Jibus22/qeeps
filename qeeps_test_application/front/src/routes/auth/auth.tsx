import { Outlet } from "react-router-dom";

export async function loader() {
  return null;
}

export default function Auth() {
  return (
    <>
      <div>
        <p>Auth</p>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
