import { Flex, Text, Image } from "@chakra-ui/react";
import rightArrow from "../../../assets/rightArrow.svg";

export function MyBreadcrumb({ title }: { title: string }) {
  return (
    <Flex alignItems={"center"} gap={"8px"}>
      <Text textAlign={"center"} lineHeight={"120%"} fontStyle={"normal"}>
        {title}
      </Text>
      <Image src={rightArrow} alt="rightarrow" />
    </Flex>
  );
}
