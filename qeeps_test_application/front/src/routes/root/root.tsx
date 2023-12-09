import { Outlet } from "react-router-dom";

export async function loader() {
  return null;
}

export default function Root() {
  return (
    <>
      <div>
        <p>Root</p>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
