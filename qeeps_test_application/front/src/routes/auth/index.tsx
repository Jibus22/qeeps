import {
  Button,
  Center,
  Container,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ActionFunctionArgs, Form } from "react-router-dom";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const inputs = Object.fromEntries(formData);

  const req = new Request("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputs),
  });

  const res = await fetch(req);
  const jsonRes = await res.json();

  return null;
}

export default function AuthIndex() {
  return (
    <Container>
      <Center m="10">
        <Text as="b" fontSize="5xl" color="#164951">
          Qeeps
        </Text>
      </Center>
      <Center>
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
    </Container>
  );
}
