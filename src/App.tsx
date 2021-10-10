import "./css/App.css";
import "react-tabs/style/react-tabs.css";

import React, { useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import AboutSection from "./Sections/AboutSection";
import { Grid } from "@material-ui/core";
import Header from "./UI/Header";
import PlayProjectsSection from "./Sections/PlayProjectsSection";
import WorkProjectsSection from "./Sections/WorkProjectsSection";
import { useStoreActions } from "./hooks";

function App() {
  const fetchCardDataGoogleSheetThunk = useStoreActions(
    (actions) => actions.appModel.fetchAppGoogleSheet
  );
  useEffect(() => {
    fetchCardDataGoogleSheetThunk();
  }, [fetchCardDataGoogleSheetThunk]);

  return (
    <div className="App">
      <Tabs>
        {/* <Grid container spacing={0}> */}
        <Header>
          <TabList>
            <Tab className={"header-tab"}>Work</Tab>
            <Tab className={"header-tab"}>Play</Tab>
            <Tab className={"header-tab"}>About</Tab>
            <Tab className={"header-tab"}>Contact</Tab>
          </TabList>
        </Header>
        <hr />
        <TabPanel>
          <WorkProjectsSection />
        </TabPanel>
        <TabPanel>
          <PlayProjectsSection />
        </TabPanel>
        <TabPanel>
          <AboutSection />
        </TabPanel>
        <TabPanel>CONTACT</TabPanel>
        {/* </Grid> */}
      </Tabs>
    </div>
  );
}

export default App;
