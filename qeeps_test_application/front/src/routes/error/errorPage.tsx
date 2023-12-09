import { useRouteError } from "react-router-dom";
import { errorTypeWorkaround } from "./utils";

export default function ErrorPage() {
  const error = errorTypeWorkaround(useRouteError());

  return (
    <div>
      <p>Error Page</p>
      <p>{error}</p>
    </div>
  );
}
