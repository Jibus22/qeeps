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
import mailIcon from "../../../assets/mail.svg";
import paperMoneyIcon from "../../../assets/paper-money-two.svg";
import folderIcon from "../../../assets/folder.svg";
import phoneIcon from "../../../assets/phone.svg";
import idIcon from "../../../assets/id-card.svg";
import briefcaseIcon from "../../../assets/briefcase.svg";
import docFolderIcon from "../../../assets/document-folder.svg";
import peopleSafeIcon from "../../../assets/people-safe.svg";
import { useOutletContext } from "react-router-dom";

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
  const user = useOutletContext() as IUser;
  const guarantorsIncome = user.guarantor
    ?.map((elem) => {
      return elem.income;
    })
    .reduce((a, c) => a + c, 0);

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
          title={`${user.income}€`}
          text={["NET MENSUEL", "(avant impôts)"]}
        ></FlashCard>
        <FlashCard
          title={user.situation}
          text={["PRISE DE FONCTION", "le 17/03/2018"]}
        ></FlashCard>
        <FlashCard
          title={`${guarantorsIncome}€`}
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
  const user = useOutletContext() as IUser;
  const fullName = user.firstname + " " + user.lastname;

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
              Candidat principal : {fullName}
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
          <ProfileFullInfo infos={user}></ProfileFullInfo>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

function Guarantors() {
  const user = useOutletContext() as IUser;
  const guarantors = user.guarantor;

  return (
    <>
      {(guarantors?.length ?? [].length > 0) && (
        <Accordion allowMultiple>
          {guarantors?.map((guarantor, idx) => {
            const fullName = guarantor.firstname + " " + guarantor.lastname;
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
                      Garant : {fullName}
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
                  <ProfileFullInfo infos={guarantor}></ProfileFullInfo>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
    </>
  );
}

function ProfileInfoHeader() {
  const user = useOutletContext() as IUser;
  const fullName = user.firstname + " " + user.lastname;
  const link = fullName.replace(" ", ".").toLowerCase();

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
        <Flex flexDir={"column"} alignItems={"flex-start"} gap={"6px"}>
          <Flex alignItems={"center"} gap={"4px"}>
            <Tag icon={briefcaseIcon} text={user.jobname}></Tag>
            <Tag icon={docFolderIcon} text={user.job ?? "unemployed"}></Tag>
          </Flex>
          <Flex alignItems={"center"} gap={"4px"}>
            {(user.guarantor?.length ?? [].length > 0) && (
              <Tag icon={peopleSafeIcon} text="Garants" color="#6FB482"></Tag>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function Tag({
  icon,
  text,
  color = "inherit",
}: {
  icon: string;
  text: string;
  color?: string;
}) {
  return (
    <Flex
      h={"24px"}
      padding={"0px 8px"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"8px"}
      borderRadius={"8px"}
      border={"1px solid #F2F2F2"}
    >
      <Image src={icon} alt={icon} />
      <Text color={color} textAlign={"center"} fontSize={"12px"}>
        {text}
      </Text>
    </Flex>
  );
}

const translate = {
  phone: {
    title: "Téléphone",
    icon: <Image src={phoneIcon} alt="phoneIcon" />,
  },
  email: { title: "Mail", icon: <Image src={mailIcon} alt="mailIcon" /> },
  situation: {
    title: "Situation professionnelle",
    icon: <Image src={folderIcon} alt="folderIcon" />,
  },
  income: {
    title: "Revenus mensuel nets",
    icon: <Image src={paperMoneyIcon} alt="paperMoneyIcon" />,
  },
  fullname: {
    title: "Nom complet",
    icon: <Image src={idIcon} alt="idIcon" />,
  },
};

function ProfileFullInfo({ infos }: { infos: IUser }) {
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
      >
        {Object.entries(infos).map((elem, idx) => {
          if (
            !(elem[0] in translate) ||
            (typeof elem[1] !== "string" && typeof elem[1] !== "number")
          )
            return;

          const title = translate[elem[0] as keyof typeof translate];
          let text = elem[1];

          if (elem[0] === "income") text += "€";

          return (
            <Flex
              key={idx}
              padding={"8px 0px"}
              alignItems={"center"}
              gap={"4px"}
              alignSelf={"stretch"}
            >
              <Flex alignItems={"center"} gap={"16px"} flex={"1 0 0"}>
                {title.icon}
                <Text
                  color={"#666"}
                  textAlign={"center"}
                  fontWeight={300}
                  fontSize={"14px"}
                >
                  {title.title}
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap={"4px"} flex={"1 0 0"}>
                <Text textAlign={"center"} fontSize={"14px"}>
                  {text}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
