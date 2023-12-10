import { Box, Button } from "@chakra-ui/react";
import { Form, Outlet, redirect, useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch("http://localhost:3000/users/me", {
    credentials: "include",
  });

  if (!response.ok) return redirect("/auth");

  const user = await response.json();

  return user;
}

export async function action() {
  await fetch("http://localhost:3000/auth/logout", {
    credentials: "include",
  });

  return redirect("/auth");
}

export default function Root() {
  const user = useLoaderData();

  return (
    <>
      <Box
        bg={"rgba(240, 240, 240, 0.5)"}
        boxShadow={"30px 5px 20px -5px rgba(0,0,0,0.15)"}
        blur={"4px"}
      >
        <Form method="post">
          <Button type="submit" size="md" color="#164951" margin={"6px 10px"}>
            Sign out
          </Button>
        </Form>
      </Box>
      <div>
        <Outlet context={user} />
      </div>
    </>
  );
}
