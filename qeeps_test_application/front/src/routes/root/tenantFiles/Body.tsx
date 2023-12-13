import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import peopleBottom from "../../../assets/people-bottom.svg";
import info from "../../../assets/info.svg";
import qeepsFull from "../../../assets/qeepsSquareFull.png";

export function TenantBody() {
  return (
    <>
      <GlanceFilePrez></GlanceFilePrez>

      <Candidate></Candidate>

      <Guarantors></Guarantors>
    </>
  );
}

function GlanceFilePrez() {
  const { income, guarantorIncome, situation } = {
    income: "4500€",
    guarantorIncome: "1750€",
    situation: "CDI",
  };

  return (
    <Flex
      flexDir={"column"}
      alignItems={"flex-start"}
      gap={"16px"}
      alignSelf={"stretch"}
    >
      <Title></Title>
      <Flex alignItems={"flex-start"} gap={"10px"} alignSelf={"stretch"}>
        <InfoBubble></InfoBubble>
      </Flex>
      <Flex alignItems={"center"} gap={"16px"} alignSelf={"stretch"}>
        <FlashCard
          title={income}
          text={["NET MENSUEL", "(avant impôts)"]}
        ></FlashCard>
        <FlashCard
          title={situation}
          text={["PRISE DE FONCTION", "le 17/03/2018"]}
        ></FlashCard>
        <FlashCard
          title={guarantorIncome}
          text={["NET MENSUEL GARANT", "(avant impôts)"]}
        ></FlashCard>
      </Flex>
    </Flex>
  );
}

function Title() {
  return (
    <Flex alignItems={"flex-start"} gap={"16px"}>
      <Text
        color={"#164951"}
        textAlign={"center"}
        fontSize={"20px"}
        lineHeight={"120%"}
      >
        Mon dossier en un clin d'oeil
      </Text>
      <Flex
        height={"24px"}
        padding={"0px 8px"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"8px"}
        borderRadius={"8px"}
        border={"1px solid #F2F2F2"}
      >
        <Flex
          w={"12px"}
          h={"12px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={peopleBottom} alt="peopleBottom" />
        </Flex>
        <Text color={"#405858"} textAlign={"center"} fontSize={"12px"}>
          1 candidat
        </Text>
      </Flex>
    </Flex>
  );
}

function InfoBubble() {
  return (
    <Flex
      padding={"16px"}
      alignItems={"flex-start"}
      gap={"10px"}
      flex={"1 0 0"}
      borderRadius={"8px"}
      border={"1px solid #F2F2F2"}
      background={"#F2FCF9"}
    >
      <Flex
        alignItems={"center"}
        gap={"16px"}
        flex={"1 0 0"}
        alignSelf={"stretch"}
      >
        <Image src={info} alt="info" />
        <Text color={"#164951"} fontSize={"12px"} fontWeight={400}>
          Retrouvez tous les indicateurs correspondants à{" "}
          <Box fontWeight={500} as="span">
            l’ensemble
          </Box>{" "}
          des candidats.
        </Text>
      </Flex>
    </Flex>
  );
}

function FlashCard({ title, text }: { title: string; text: string[] }) {
  return (
    <Flex
      h={"88px"}
      padding={"8px 16px 0px 16px"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"8px"}
      flex={"1 0 0"}
      borderRadius={"8px"}
      border={"1.2px solid #F2F2F2"}
      background={"#FFF"}
    >
      <Text fontWeight={600} fontSize={"20px"}>
        {title}
      </Text>
      <Flex flexDir={"column"} alignItems={"center"} alignSelf={"stretch"}>
        {text.map((elem, idx) => {
          return (
            <Text key={idx} fontSize={"8px"} fontWeight={300}>
              {elem}
            </Text>
          );
        })}
      </Flex>
    </Flex>
  );
}

function Candidate() {
  const candidateName = "Fabien Bricard";

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem border={"none"}>
        <h2>
          <AccordionButton padding={"0em"}>
            <Box
              as="span"
              flex="0 1 auto"
              textAlign="left"
              fontSize={"20px"}
              fontWeight={500}
              lineHeight={"120%"}
            >
              Candidat principal : {candidateName}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          marginTop={"16px"}
          padding={"0em"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          gap={"16px"}
          alignSelf={"stretch"}
        >
          <ProfileInfoHeader></ProfileInfoHeader>
          <ProfileFullInfo></ProfileFullInfo>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

function Guarantors() {
  const guarantors = ["Martine Bricard", "Alban Colin Bricard"];

  return (
    <Accordion allowMultiple>
      {guarantors.map((elem, idx) => {
        return (
          <AccordionItem key={idx} border={"none"} marginBottom={"32px"}>
            <h2>
              <AccordionButton padding={"0em"}>
                <Box
                  as="span"
                  flex="0 1 auto"
                  textAlign="left"
                  fontSize={"20px"}
                  fontWeight={500}
                  lineHeight={"120%"}
                >
                  Garant : {elem}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              padding={"0em"}
              marginTop={"16px"}
              display={"flex"}
              flexDir={"column"}
              alignItems={"flex-start"}
              gap={"16px"}
              alignSelf={"stretch"}
            >
              Info Garant {idx}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

function ProfileInfoHeader() {
  const fullName = "Fabien Bricard";
  const link = "fabien.bricard";
  return (
    <Flex
      padding={"16px 24px"}
      alignItems={"center"}
      gap={"32px"}
      alignSelf={"stretch"}
      borderRadius={"8px"}
      border={"1px solid #F2F2F2"}
    >
      <Image src={qeepsFull} alt="qeepsFull" />
      <Flex
        padding={"8px"}
        flexDir={"column"}
        alignItems={"flex-start"}
        gap={"8px"}
      >
        <Flex flexDir={"column"} alignItems={"flex-start"}>
          <Text fontSize={"18px"} lineHeight={"120%"}>
            {fullName}
          </Text>
          <Text fontSize={"12px"} fontWeight={300}>
            @{link}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

function ProfileFullInfo() {
  return (
    <Flex
      padding={"8px 32px"}
      alignItems={"flex-start"}
      gap={"10px"}
      alignSelf={"stretch"}
      borderRadius={"8px"}
      border={"1px solid #F2F2F2"}
    >
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        flex={"1 0 0"}
      ></Flex>
    </Flex>
  );
}
