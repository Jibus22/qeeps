import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Container,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const inputs = Object.fromEntries(formData);

  const req = new Request("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(inputs),
  });

  const res = await fetch(req);

  if (res.ok) return redirect("/");

  const err = await res.json();

  return err;
}

export default function AuthIndex() {
  const err = useActionData() as { message: string };

  return (
    <Container>
      <Center m="10">
        <Text as="b" fontSize="5xl" color="#164951">
          Qeeps
        </Text>
      </Center>
      <Center
        padding="1em"
        boxShadow="0px 5px 50px -5px rgba(0,0,0,0.15)"
        borderRadius="5px"
      >
        <Form method="post">
          <SimpleGrid columns={1} spacing={5}>
            <Input name="email" type="email" placeholder="email" />
            <Input name="password" type="password" placeholder="password" />
            <Button color="#164951" size="md" type="submit">
              Sign In
            </Button>
          </SimpleGrid>
        </Form>
      </Center>
      <Center margin="1em">
        {err && (
          <Alert status="error" borderRadius="5px" width="80%">
            <AlertIcon />
            {err.message}
          </Alert>
        )}
      </Center>
    </Container>
  );
}
