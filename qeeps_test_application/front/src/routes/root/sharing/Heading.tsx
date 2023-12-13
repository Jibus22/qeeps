import { Flex } from "@chakra-ui/react";
import { MyBreadcrumb } from "../components/Breadcrumb";
import { MyTitle } from "../components/Title";

export function sharingHeading({ title }: { title: string }) {
  return (
    <>
      <MyBreadcrumb title={title}></MyBreadcrumb>
      <Flex flexDir={"column"} gap={"4px"}>
        <MyTitle title={title}></MyTitle>
        <Flex>sharing infos here</Flex>
      </Flex>
    </>
  );
}
