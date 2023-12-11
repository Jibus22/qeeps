import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { TenantHeading } from "./tenantFiles/Heading";
import { permissionsHeading } from "./permissions/Heading";
import { sharingHeading } from "./sharing/Heading";
import { TenantBody } from "./tenantFiles/Body";
import { PermissionsBody } from "./permissions/Body";
import { SharingBody } from "./sharing/Body";

export default function Index() {
  const [tabIndex, setTabIndex] = useState(0);
  const pages = [
    {
      header: TenantHeading,
      title: "🪪 Mon dossier locataire",
      body: TenantBody,
    },
    {
      header: permissionsHeading,
      title: "Permissions",
      body: PermissionsBody,
    },
    { header: sharingHeading, title: "Partage", body: SharingBody },
  ];

  return (
    <>
      <Box minH={"300px"}>
        {pages[tabIndex].header({ title: pages[tabIndex].title })}
      </Box>
      <Tabs onChange={(index) => setTabIndex(index)}>
        <TabList>
          {pages.map((elem, idx) => {
            return (
              <Tab
                key={idx}
                padding={".5em 1.5em .5em .3em"}
                _selected={{ fontWeight: "600" }}
              >
                {elem.title}
              </Tab>
            );
          })}
        </TabList>
        <TabIndicator mt="-2px" height="2px" bg="#164951" borderRadius="1px" />
        <TabPanels>
          {pages.map((elem, idx) => {
            return <TabPanel key={idx}>{elem.body()}</TabPanel>;
          })}
        </TabPanels>
      </Tabs>
    </>
  );
}
