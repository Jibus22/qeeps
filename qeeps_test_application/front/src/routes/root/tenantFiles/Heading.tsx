import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import approved from "../../../assets/approved.svg";
import cpy from "../../../assets/Group.svg";
import send from "../../../assets/send.svg";
import { MyBreadcrumb } from "../components/Breadcrumb";
import { MyTitle } from "../components/Title";
import { MouseEventHandler } from "react";

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
  // Get the data with useOutletContext
  const { userUri, agenceMail } = {
    userUri: "user_uri",
    agenceMail: "agence.mayo@gmail.com",
  };

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
        <UtilSnippet
          title="Votre lien partageable"
          innerElement={<ShareableLink link={userUri}></ShareableLink>}
          buttonDesign={<Image src={cpy} alt="cpy" />}
          buttonClick={() => {
            navigator.clipboard.writeText("byqeeps.com/profile/" + userUri);
          }}
        ></UtilSnippet>
        <UtilSnippet
          title="Envoyer le dossier par e-mail"
          innerElement={<AgenceMail mail={agenceMail}></AgenceMail>}
          buttonDesign={<Image src={send} alt="send" />}
          buttonClick={() => console.log("send to " + agenceMail)}
        ></UtilSnippet>
      </Flex>
    </Flex>
  );
}

function UtilSnippet({
  title,
  innerElement,
  buttonDesign = null,
  buttonClick = null,
}: {
  title: string;
  innerElement: JSX.Element;
  buttonDesign?: JSX.Element | null;
  buttonClick?: MouseEventHandler | null;
}) {
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
        lineHeight={"120%"}
        overflow={"hiden"}
        textOverflow={"ellipsis"}
        whiteSpace={"nowrap"}
        h={"23.608px"}
        flexDir={"column"}
        justifyContent={"center"}
        flexShrink={0}
        alignSelf={"stretch"}
      >
        {title}
      </Text>

      <Flex
        alignItems={"center"}
        gap={"6px"}
        flex={"1 0 0"}
        alignSelf={"stretch"}
      >
        <Flex
          h={"46px"}
          alignItems={"center"}
          flex={"1 0 0"}
          borderRadius={"11.804px"}
          border={"1.2px solid #F2F2F2"}
        >
          {innerElement}
        </Flex>
        {buttonDesign && buttonClick && (
          <Button
            onClick={buttonClick}
            as="button"
            h={"100%"}
            w={"48px"}
            background={"transparent"}
            borderRadius={"14px"}
            border={"1px solid #F2F2F2"}
            padding={"10px 16px"}
          >
            {buttonDesign}
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

function ShareableLink({ link }: { link: string }) {
  return (
    <Flex paddingLeft={"16px"}>
      <Text color={"#CCC"} textAlign={"center"} fontWeight={400}>
        byqeeps.com/profile/
      </Text>
      <Box borderRight={"1px solid #F2F2F2"} margin={"0px 16px 0px 16px"}></Box>
      <Text color={"#999"} fontWeight={400}>
        {link}
      </Text>
    </Flex>
  );
}

function AgenceMail({ mail }: { mail: string }) {
  return (
    <Flex paddingLeft={"16px"}>
      <Text color={"#B3B3B3"} textAlign={"center"} fontWeight={400}>
        {mail}
      </Text>
    </Flex>
  );
}
