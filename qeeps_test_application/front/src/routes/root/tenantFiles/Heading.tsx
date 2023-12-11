import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import approved from "../../../assets/approved.svg";
import Group from "../../../assets/Group.svg";
import { MyBreadcrumb } from "../components/Breadcrumb";
import { MyTitle } from "../components/Title";

export function TenantHeading({ title }: { title: string }) {
  return (
    <>
      <MyBreadcrumb title="Mon dossier locataire"></MyBreadcrumb>
      <Flex flexDir={"column"} gap={"4px"}>
        <MyTitle title={title}></MyTitle>
        <Kpi></Kpi>
      </Flex>
    </>
  );
}

function Kpi() {
  return (
    <Flex
      padding={"22px 32px"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      gap={"16px"}
      alignSelf={"stretch"}
      borderRadius={"1rem"}
      border={"1px solid var(--gray-gray-10, #F2F2F2)"}
      background={"#FFF"}
    >
      <Flex alignItems={"center"} gap={"32px"} alignSelf={"stretch"}>
        <Image src={approved} alt="approved" />
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          gap={"8px"}
          flex={"1 0 0"}
        >
          <Text textAlign={"center"} lineHeight={"120%"} fontSize={"16px"}>
            Félicitations, vous avez complété votre dossier à 100% 🎉
          </Text>

          <Text fontWeight={"400"}>
            Vérifiez rapidement les différents indices correspondants à votre
            activité.
          </Text>
        </Flex>
      </Flex>

      <Flex alignItems={"center"} gap={"32px"} alignSelf={"stretch"}>
        <TextInput title={"Votre lien partageable"}></TextInput>
        <TextInput title={"Envoyer le dossier par e-mail"}></TextInput>
      </Flex>
    </Flex>
  );
}

function TextInput({ title }: { title: string }) {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      gap={"5.902px"}
      flex={"1 0 0"}
      height={"75.509px"}
    >
      <Text
        textAlign={"center"}
        lineHeight={"120%"}
        overflow={"hiden"}
        textOverflow={"ellipsis"}
        whiteSpace={"nowrap"}
      >
        {title}
      </Text>

      <Flex
        alignItems={"center"}
        gap={"6px"}
        flex={"1 0 0"}
        alignSelf={"stretch"}
      >
        <InputGroup
          borderRadius={"11.804px"}
          border={"1.2px solid var(--gray-gray-10, #F2F2F2)"}
        >
          <InputLeftAddon
            children="byqeeps.com/profile/"
            color={"#CCC"}
            textAlign={"center"}
            fontWeight={"400"}
            background={"transparent"}
          />
          <Input type="text" placeholder="michel36" disabled />
        </InputGroup>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"stretch"}
          gap={"10px"}
          width={"48px"}
          padding={"10px 16px"}
          borderRadius={"14px"}
          border={"1px solid var(--gray-gray-10, #F2F2F2)"}
          background={"#FFF"}
        >
          <Flex alignItems={"center"} gap={"8px"}>
            <Flex
              w={"13.305px"}
              h={"13.305px"}
              padding={"1.109px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={Group} alt="rightarrow" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
