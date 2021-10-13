import "./css/App.css";
import "./css/global.css";
import "react-tabs/style/react-tabs.css";

import React, { useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import AboutSection from "./Sections/AboutSection";
import Header from "./UI/Header";
import PlayProjectsSection from "./Sections/PlayProjectsSection";
import WorkProjectsSection from "./Sections/WorkProjectsSection";
import { useStoreActions } from "./hooks";

const App = () => {
  const fetchCardDataGoogleSheetThunk = useStoreActions(
    (actions) => actions.appModel.fetchAppGoogleSheet
  );
  useEffect(() => {
    fetchCardDataGoogleSheetThunk();
  }, [fetchCardDataGoogleSheetThunk]);

  return (
    <div className="app">
      <Tabs>
        <div className={"body-container"}>
          {/* <Grid container spacing={0}> */}
          <div className={"nav-section-container"}>
            <Header>
              <TabList>
                <Tab className={"header-tab"}>Work</Tab>
                <Tab className={"header-tab"}>Play</Tab>
                <Tab className={"header-tab"}>About</Tab>
                <Tab className={"header-tab"}>Contact</Tab>
              </TabList>
            </Header>
          </div>
          <hr />
          <div className={"content-section-container"}>
            <TabPanel>
              <WorkProjectsSection />
            </TabPanel>
            <TabPanel>
              <PlayProjectsSection />
            </TabPanel>
            <TabPanel>
              <AboutSection />
            </TabPanel>
            <TabPanel>
              <img
                style={{ filter: "invert(100%)" }}
                src={`${process.env.PUBLIC_URL}/e.png`}
              />
            </TabPanel>
          </div>
          {/* </Grid> */}
        </div>
      </Tabs>
    </div>
  );
};

export default App;
