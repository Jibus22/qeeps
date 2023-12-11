import { Flex, Text } from "@chakra-ui/react";

export function MyTitle({ title }: { title: string }) {
  return (
    <Flex padding={"16px 0px"}>
      <Flex gap={"16px"}>
        <Text fontSize={"24px"}>{title}</Text>
      </Flex>
    </Flex>
  );
}
